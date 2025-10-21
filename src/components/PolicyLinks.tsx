import Link from "next/link";

const linksCN = "text-red-500 hover:text-red-300"

const PolicyLinks = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 text-sm md:text-md'>
            <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/refund" target='_blank' className={linksCN}>Refund Policy</Link> 
            <span className='hidden md:block'>|</span>
            <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/terms" target='_blank' className={linksCN}>Terms and Conditions</Link>
            <span className='hidden md:block'>|</span>
            <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/shipping" target='_blank' className={linksCN}>Shipping Policy</Link>
        </div>
    );
}

export default PolicyLinks;