import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const Home = () => {
    const image = [
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/08/29/web-oppo-reno8-series_637973822849702214.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/21/banner-may-loc-kk-03.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/12/webbbbb.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/20/web-1200.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/13/web-g11-plus-01.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/12/web-lap-amd-03.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/17/1200x382-wweb.jpg",
        "https://cdn.hoanghamobile.com/i/home/Uploads/2022/09/15/anh-landing-page-dat-truoc-bo-suu-tap-gioi-han-z-flip4-04_637988303148073415.jpg",
    ]

    const [positionX, setPositionX] = useState(0)
    const [indexItem, setIndex] = useState(0)


    const sliderMain = document.querySelector('.slider-main')
    const sliderItems = document.querySelectorAll('.slider-item').length

    // setInterval(() => {
    //     // if (positionX < -8000) {
    //     //     setPositionX(0)
    //     // }
    //     // else {
    //     //     setPositionX(pre => pre - 1000)
    //     // }
    // }, 3000)

    // useEffect(() => {
    //     setInterval(() => {
    //         if (positionX < -8000) {
    //             setPositionX(0)
    //         }
    //         else {
    //             setPositionX(pre => pre - 1000)
    //         }
    //     }, 3000)

    //     clearInterval();
    // }, [])

    const handleClickNext = () => {
        if (indexItem === sliderItems - 1) {
            return
        }
        else {
            setIndex(pre => pre + 1)
            setPositionX(pre => pre - 1000)
        }
    }

    const handleClickPrevious = () => {
        if (indexItem <= 0) {
            return
        }
        else {
            setIndex(pre => pre - 1)
            setPositionX(pre => pre + 1000)
        }
    }

    return (
        <>
            <div className="slider">
                <i className="bi bi-caret-left-fill slider-prev border-2 border-gray-200 hover:bg-slate-100" onClick={handleClickPrevious}></i>
                <ul className="slider-dots" >
                    {image.map((item, index) => (
                        <li className="slider-dot-item" style={{ background: `${indexItem === index ? 'gray' : '#fff'}` }} data-index={index} ></li>
                    ))}
                </ul>
                <div className="slider-wrapper">
                    <div className="slider-main" style={{ transform: `translateX(${positionX}px)` }}>
                        {image.map((item, index) => (
                            <div className="slider-item">
                                <img
                                    className="block max-w-full"
                                    src={item}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <i className="bi bi-caret-right-fill slider-next border-2 border-gray-200 hover:bg-slate-100" onClick={handleClickNext}></i>
            </div>
        </>
    )
}

export default Home