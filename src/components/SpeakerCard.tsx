import { motion } from 'motion/react'
import { GrFormNext } from 'react-icons/gr'

type SpeakerCardProps = {
  pos: number
  imageUrl: string
  name: string
  title: string
  isActive?: boolean
  handleHover: () => void
  currentIndex: number
}

const SpeakerCard = ({
  pos,
  imageUrl,
  name,
  title,
  isActive = false,
  handleHover,
  currentIndex,
}: SpeakerCardProps) => {
  const imageVariants = {
    center: { x: '', zIndex: 5 },
    left: { x: '', zIndex: 2 },
    right: { x: '', zIndex: 1 },
  }
  const getPos =
    pos == currentIndex ? 'center' : pos > currentIndex ? 'right' : 'left'
  return (
    <motion.div
      className={`
    relative min-w-[40%] sm:min-w-[45%] md:min-w-[50%] lg:w-[320px] xl:w-[350px]
    h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px]
    shrink-0 overflow-hidden rounded-xl
    transform transition-all duration-500 ease-in-out
    ${isActive ? 'scale-105 border border-gray-300' : 'scale-90 opacity-60'}
  `}
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      onMouseEnter={handleHover}
      variants={imageVariants}
      animate={{
        scale: 1,
        opacity: 1,
      }}
    >
      {/* Speaker Image */}
      <img
        src={imageUrl}
        alt={name}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isActive ? '' : getPos === 'right' ? 'filter grayscale ' : 'grayscale'
        }`}
      />

      {/* Overlay Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 flex justify-between md:gap-4 -gap-1  items-end text-white">
        <div className="text-left">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
            {name}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm  text-gray-400">
            {title}
          </p>
        </div>
        <div
          className={`
      h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 
      rounded-full flex items-center justify-center
      transition-colors duration-300
      ${isActive ? 'bg-red-600' : 'bg-gray-500'}`}
        >
          <GrFormNext className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
        </div>
      </div>
    </motion.div>
  )
}

export default SpeakerCard
