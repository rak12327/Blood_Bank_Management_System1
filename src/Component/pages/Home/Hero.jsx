import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';


const Hero = () => {

    return (
        <div className='max-w-[1300px] w-[100%] m-auto px-[1rem] py-[2rem]'>
            <div className='flex items-center justify-center flex-col lg:flex-row h-full lg:py-[4rem]'>
                <div className='w-[100%] sm:w-[80%] md:w-[60%] lg:w-[45%]'>
                    <img src="/assets/bloodDonation.jpg" alt='...' />
                </div>
                <div className='lg:w-[55%]'>
                    <h1 className='text-[crimson] text-2xl font-bold mb-[.5rem]'>
                        Blood donation will cost you nothing but it will save a life !
                    </h1>

                    <TypeWriterEffect
                        multiText={[
                            `We need you to save life.`,
                            `Light up a lamp of life by donating Blood.`,
                            `Donate Blood so that others may live ...`,
                        ]}
                        multiTextDelay={1000}
                        typeSpeed={90}
                        textStyle={{
                            color: 'crimson',
                            fontWeight: 500,
                            fontSize: '.5re,',
                        }}
                        startDelay={1000}
                        multiTextLoop={true}
                    />

                    <div className='my-[1rem]'>
                        <button className='text-[#fff] bg-[crimson] py-[.5rem] px-[1rem] rounded-lg uppercase cursor-pointer'>donate now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero