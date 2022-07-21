import React, { useEffect, useRef } from 'react'
import { init } from 'ityped';

const Hero = () => {

    let textType = useRef()

    useEffect(() => {
        init(textType.current, {
            showCursor: false,
            backDelay: 1800,
            backSpeed: 60,
            strings: [`We need you to save life.`,
                `Light up a lamp of life by donating Blood.`,
                `Donate Blood so that others may live ...`,
            ],
        });
    }, []);

    return (
        <div className='max-w-[1300px] h-[100vh] w-[100%] m-auto px-[1rem] py-[2rem] z-0 '>
            <div className='flex items-center justify-center h-full py-[4rem]'>
                <div className='w-[45%]'>
                    <img src="/assets/bloodDonation.jpg" alt='...' />
                </div>
                <div className='w-[55%]'>
                    <h1 className='text-[crimson] text-2xl font-bold'>
                        Blood donation will cost you nothing but it will save a life !
                    </h1>
                    <span ref={textType}></span>

                </div>
            </div>
        </div>
    )
}

export default Hero