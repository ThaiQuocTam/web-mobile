import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { images } from '../../models/Home.model'

const Home = () => {

    const [positionX, setPositionX] = useState(0)
    const [indexItem, setIndex] = useState(0)
    const sliderItems = document.querySelectorAll('.slider-item').length

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (positionX === -7000) {
                return
            }
            else {
                setPositionX(pre => pre - 1000)
                setIndex(pre => pre + 1)
            }
        }, 3000)

        return () => clearTimeout(timerId)
    }, [positionX])

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
        if (positionX >= 0) {
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
                    {images.map((item, index) => (
                        <li className="slider-dot-item" style={{ background: `${indexItem === index ? 'gray' : '#fff'}` }} data-index={index} ></li>
                    ))}
                </ul>
                <div className="slider-wrapper">
                    <div className="slider-main" style={{ transform: `translateX(${positionX}px)` }}>
                        {images.map((item, index) => (
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