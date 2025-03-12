import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
            <div className=" container mx-auto px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col gap-3'>

                        <h1 className='theme-clr  text-2xl  font-semibold text-center lg:text-start  '>Welcome to Eupraxis.</h1>
                        <h1 className='text-midnightblue text-3xl  font-semibold text-center lg:text-start  lh-120 '>Advance your skills with us.</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 '>Build skills with our courses and mentor from world-class companies.</h3>

                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Learning path</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Community</p>
                            </div>
                        </div>

                        <div className="mt-10 md:mt-20 flex justify-center">
                            <Link href="/" className="theme-bg rounded-xl px-6 py-3 text-white font-semibold text-center inline-block hover:shadow-xl hover:bg-blue-600 transition-all duration-300">
                                Get Started
                            </Link>
                        </div>

                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/mahila.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
    )
}

export default Banner;
