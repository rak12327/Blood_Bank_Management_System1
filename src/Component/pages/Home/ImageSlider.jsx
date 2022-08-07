import React from 'react';
import Slider from "react-slick";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import { Data } from '../../Export';
import './Req.css'


function ImageSlider() {

    // const NextArrow = ({ onClick }) => {
    //     return (
    //         <div className="arrow next" onClick={onClick}>
    //             <FaArrowRight />
    //         </div>
    //     )
    // }

    // const PrevArrow = ({ onClick }) => {
    //     return (
    //         <div className="arrow prev" onClick={onClick}>
    //             <FaArrowLeft />
    //         </div>
    //     )
    // }

    // let [imageInd, setImageInd] = useState(0);

    const settings = {

        // centerPadding: "60px",

        // speed: 500,

        // infinity: true,
        // lazyLoad: true,
        // speed: 300,
        // slidesToShow: 1,
        // centerMode: true,

        // dots: true,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        // beforeChange: (current, next) => setImageInd(next),


        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='h-[100%] bg-[crimson]'>
            <div className='max-w-[1300px] m-auto px-[1rem] w-[100%] h-[100%]'>
                {/* <div className='flex justify-center h-[100%]'> */}

                    <Slider {...settings} >
                        <div className="flex justify-center items-center h-full">
                            <div className="bg-[#fff] p-[1rem] max-w-[900px] w-[100%] h-[350px] flex items-center justify-around flex-row">
                                <div className='w-[55%]'><h1>text</h1></div>
                                <div className='w-[30%]'>
                                    <img src='/assets/BloodSlide4.jpg' alt='...' className='w-[100%]' />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="bg-[#fff] p-[1rem] max-w-[900px] w-[100%] h-[350px] flex items-center justify-around flex-row">
                                <div className='w-[55%]'><h1>text</h1></div>
                                <div className='w-[30%]'>
                                    <img src='/assets/BloodSlide4.jpg' alt='...' className='w-[100%]' />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="bg-[#fff] p-[1rem] max-w-[900px] w-[100%] h-[350px] flex items-center justify-around flex-row">
                                <div className='w-[55%]'><h1>text</h1></div>
                                <div className='w-[30%]'>
                                    <img src='/assets/BloodSlide4.jpg' alt='...' className='w-[100%]' />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            {/* </div> */}
        </div>
    );
}



export default ImageSlider
