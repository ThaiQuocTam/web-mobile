import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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


    const sliderMain = document.querySelector('.slider-main')
    const sliderItems = document.querySelectorAll('.slider-item')
    let positionX = 0
    let index = 0

    const handleClickNext = () => {
        const sliderItemWidth = sliderItems[0].offsetWidth;
        const sliderLength = sliderItems.length
        index = index++
        if (index > sliderLength) {
            index = 1
            return
        }
        else {
            positionX = positionX - sliderItemWidth
            sliderMain.style = `transform : translateX(${positionX}px)`
        }
    }

    const handleClickPrevious = () => {
        const sliderItemWidth = sliderItems[0].offsetWidth;
        positionX = positionX + sliderItemWidth
        sliderMain.style = `transform : translateX(${positionX}px)`
    }
    return (
        <>
            <div className="slider">
                <i className="bi bi-caret-left-fill slider-prev border-2 border-gray-200 hover:bg-slate-100" onClick={handleClickPrevious}></i>
                <ul className="slider-dots">
                    {image.map((item, index) => (
                        <li className="slider-dot-item active" data-index={index} ></li>
                    ))}
                </ul>
                <div className="slider-wrapper">
                    <div className="slider-main">
                        {image.map((item, index) => (
                            <div className="slider-item">
                                <img
                                    className="block m-w-full"
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