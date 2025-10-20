import React, { useRef, useEffect } from "react";
// @ts-nocheck

export default function GalaxyBackground({
  style = { position: "absolute", inset: 0, zIndex: 0 },
  className,
  speed = 1.0,
  pixelRatioCap = 2,
}) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const glRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // --- Create WebGL context ---
    const gl =
      canvas.getContext("webgl", { antialias: false }) ||
      canvas.getContext("experimental-webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }
    glRef.current = gl;

    // --- Helpers: compile shaders & program ---
    function compileShader(src, type) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(s));
        console.log("--- shader source ---\n", src);
        gl.deleteShader(s);
        return null;
      }
      return s;
    }
    function createProgram(vsSrc, fsSrc) {
      const vs = compileShader(vsSrc, gl.VERTEX_SHADER);
      const fs = compileShader(fsSrc, gl.FRAGMENT_SHADER);
      if (!vs || !fs) return null;
      const p = gl.createProgram();
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        console.error("Program link error:", gl.getProgramInfoLog(p));
        gl.deleteProgram(p);
        return null;
      }
      // shaders may be deleted after link
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      return p;
    }

    // --- Vertex shader (simple full-screen triangle) ---
    const vertexSrc = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = 0.5*(aPos + 1.0); // map from clipspace [-1,1] to [0,1]
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;

    // --- Fragment shader adapted from the provided Shadertoy script ---
    // Notes:
    //  - uses uniforms: uResolution (vec2 css pixels), uTime (float seconds)
    //  - uChannel0 & uChannel1 samplers (noise and stars)
    //  - uChannel0Res / uChannel1Res: vec2 pixel sizes of textures
    //  - texture2D used (WebGL 1.0)
    const fragmentSrc = `
      precision mediump float;
      varying vec2 vUv;

      uniform vec2 uResolution;
      uniform float uTime;
      uniform float uSpeed;
      uniform sampler2D uChannel0; // noise
      uniform sampler2D uChannel1; // stars
      uniform vec2 uChannel0Res;
      uniform vec2 uChannel1Res;

      const float RETICULATION = 3.0;
      const float NB_ARMS = 5.0;
      const float COMPR = 0.1;
      const float SPEED = 0.1;
      const float GALAXY_R = 1.0/2.0;
      const float BULB_R = 1.0/2.5;
      const vec3 GALAXY_COL = vec3(1.0,0.0,0.0);
      const vec3 BULB_COL   = vec3(0.5,0.0,0.0);
      const float BULB_BLACK_R = 1.0/4.0;
      const vec3 BULB_BLACK_COL   = vec3(0.0,0.0,0.0);
      const vec3 SKY_COL    = 0.5 * vec3(0.0,0.0,0.0);

      #define Pi 3.1415927

      // --- base noise (texture sample modes) ---
      float tex(vec2 uv) {
        float n = texture2D(uChannel0, uv).r;
        // MODE 3 (wires) behavior from original
        return 1.0 - abs(2.0 * n - 1.0);
      }

      // --- perlin turbulent noise + rotation ---
      float noise(vec2 uv) {
        float v = 0.0;
        float a = -SPEED * uTime * uSpeed;
        float co = cos(a), si = sin(a);
        mat2 M = mat2(co, -si, si, co);
        const int L = 7;
        float s = 1.0;
        for (int i = 0; i < L; i++) {
          uv = M * uv;
          float b = tex(uv * s);
          v += 1.0 / s * pow(b, RETICULATION);
          s *= 2.0;
        }
        return v / 2.0;
      }

      void main() {
        // fragCoord in CSS pixels (consistent with uResolution)
        vec2 fragCoord = vUv * uResolution;
        // vec2 uv = fragCoord / uResolution.y - vec2(0.8, 0.5);
        vec2 uv = (fragCoord - 0.5 * uResolution) / uResolution.y; // Fixed line
        vec3 col;

        float rho = length(uv);
        float ang = atan(uv.y, uv.x);
        float shear = 2.0 * log(max(rho, 1e-6)); // avoid log(0)
        float c = cos(shear), s = sin(shear);
        mat2 R = mat2(c, -s, s, c);

        float r;
        r = rho / GALAXY_R; float dens = exp(-r*r);
        r = rho / BULB_R; float bulb = exp(-r*r);
        r = rho / BULB_BLACK_R; float bulb_black = exp(-r*r);
        float phase = NB_ARMS * (ang - shear);
        ang = ang - COMPR * cos(phase) + SPEED * uTime * uSpeed;
        uv = rho * vec2(cos(ang), sin(ang));
        float spires = 1.0 + NB_ARMS * COMPR * sin(phase);
        dens *= 0.7 * spires;

        // gaz texture (scaled)
        float gaz = noise(0.09 * 1.2 * R * uv);
        float gaz_trsp = pow((1.0 - gaz * dens), 2.0);

        // stars: adapt stars size to display resolution (use uChannel1Res.y)
        float ratio = 0.8 * uResolution.y / uChannel0Res.y;
        float stars1 = texture2D(uChannel1, ratio * uv + 0.5).r;
        float stars2 = texture2D(uChannel0, ratio * uv + 0.5).r;
        float stars = pow(1.0 - (1.0 - stars1) * (1.0 - stars2), 5.0);

        col = mix(SKY_COL,
                  gaz_trsp * (1.7 * GALAXY_COL) + 1.2 * stars,
                  dens);
        col = mix(col, 2.0 * BULB_COL, 1.2 * bulb);
        col = mix(col, 1.2 * BULB_BLACK_COL, 2.0 * bulb_black);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // --- Create program ---
    const program = createProgram(vertexSrc, fragmentSrc);
    if (!program) return;

    gl.useProgram(program);

    // --- Full screen triangle / quad setup (two triangles using a strip of 4 verts) ---
    // We'll use a simple triangle pair via a buffer of clipspace positions:
    const aPosLoc = gl.getAttribLocation(program, "aPos");
    const quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    // 6 vertices (two triangles) - full clip space quad
    const verts = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    // --- Uniform locations ---
    const uResolutionLoc = gl.getUniformLocation(program, "uResolution");
    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uSpeedLoc = gl.getUniformLocation(program, "uSpeed");
    const uChannel0Loc = gl.getUniformLocation(program, "uChannel0");
    const uChannel1Loc = gl.getUniformLocation(program, "uChannel1");
    const uChannel0ResLoc = gl.getUniformLocation(program, "uChannel0Res");
    const uChannel1ResLoc = gl.getUniformLocation(program, "uChannel1Res");

    // --- Create two textures in JS (noise and starfield) using offscreen canvas ---
    function makeNoiseTexture(size = 512) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");
      const img = ctx.createImageData(size, size);
      const data = img.data;
      // Simple fractal-ish noise: random + handful of blended passes (cheap)
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          // layered randomness for a bit of structure
          let n = 0;
          n += Math.random() * 0.6;
          n += Math.random() * 0.3 * ( (x % 2) ^ (y % 2) );
          n += Math.random() * 0.1;
          n = Math.min(1, Math.max(0, n));
          const i = (y * size + x) * 4;
          const v = Math.floor(n * 255);
          data[i] = data[i+1] = data[i+2] = v;
          data[i+3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      // apply a mild blur using canvas filter if available (for nicer look)
      try {
        const temp = document.createElement("canvas");
        temp.width = temp.height = size;
        const tctx = temp.getContext("2d");
        tctx.filter = "blur(1px)";
        tctx.drawImage(c, 0, 0);
        return temp;
      } catch (e) {
        return c;
      }
    }

    function makeStarfieldTexture(size = 512, starCount = 700) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, size, size);

      // Add stars with varied brightness and size
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const r = Math.pow(Math.random(), 3) * 1.6; // more small stars
        const b = Math.floor(150 + Math.random() * 105);
        ctx.fillStyle = `rgba(${b},${b},${b},${0.7 + Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      return c;
    }

    // create textures
    const noiseCanvas = makeNoiseTexture(512);
    const starCanvas = makeStarfieldTexture(512, 900);

    function createGLTextureFromCanvas(canvasEl) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        canvasEl
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      // clamp to edge to avoid wrap seams
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return tex;
    }

    const tex0 = createGLTextureFromCanvas(noiseCanvas);
    const tex1 = createGLTextureFromCanvas(starCanvas);

    // bind texture units
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex0);
    gl.uniform1i(uChannel0Loc, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, tex1);
    gl.uniform1i(uChannel1Loc, 1);

    // set channel resolutions
    gl.uniform2f(uChannel0ResLoc, noiseCanvas.width, noiseCanvas.height);
    gl.uniform2f(uChannel1ResLoc, starCanvas.width, starCanvas.height);

    // set speed
    gl.uniform1f(uSpeedLoc, speed);

    // --- Resize handling & initial sizing ---
    let dpr = Math.min(window.devicePixelRatio || 1, pixelRatioCap);

    function resize() {
      // canvas CSS size (logical pixels)
      const cssW = Math.max(1, canvas.clientWidth);
      const cssH = Math.max(1, canvas.clientHeight);
      // drawing buffer size (device pixels)
      const bufferW = Math.floor(cssW * dpr);
      const bufferH = Math.floor(cssH * dpr);
      if (canvas.width !== bufferW || canvas.height !== bufferH) {
        canvas.width = bufferW;
        canvas.height = bufferH;
        gl.viewport(0, 0, bufferW, bufferH);
      }
      // pass uResolution in CSS pixels (matching original shadertoy behaviour)
      gl.uniform2f(uResolutionLoc, cssW, cssH);
    }

    // initial size
    resize();

    // listen for resize on window and also a ResizeObserver for container
    const ro = new ResizeObserver(() => {
      dpr = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
      resize();
    });
    ro.observe(canvas);

    // --- Animation ---
    let start = performance.now();
    function render(now) {
      const elapsed = (now - start) / 1000.0;
      gl.uniform1f(uTimeLoc, elapsed);

      // draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    // --- Cleanup on unmount ---
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      try {
        gl.deleteTexture(tex0);
        gl.deleteTexture(tex1);
        gl.deleteBuffer(quadBuf);
        if (program) gl.deleteProgram(program);
      } catch (e) {}
    };
  }, [speed, pixelRatioCap]);

  // Canvas is absolutely positioned by default via style prop; parent should size it.
  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={style}
      // make sure the canvas expands to parent; user can override via props
      width={0}
      height={0}
    />
  );
}
