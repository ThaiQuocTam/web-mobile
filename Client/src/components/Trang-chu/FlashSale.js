import { listSmartphone } from 'models/Home.model'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import { Link } from 'react-router-dom';

const FlashSale = () => {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <>
            <div className='pl-24 mt-8 mb-5'>
                <div className='bg-green-950 max-w-54 p-1 pl-5 border-l-25 border-green-200 rounded-1'>
                    <span className='text-4 font-semibold text-white'>FLASH SALE</span>
                </div>
            </div>
            <div className='px-24 shadow-soft-xxs bg-green-150'>
                <Slider {...settings}>
                    {
                        listSmartphone.map((item, index) => (
                            <div className='p-5 mx-5 h-90 box-shadow rounded-2 bg-white'>
                                <div className=''>
                                    <div className=''>
                                        <img className='mx-auto' src={item.image} />
                                    </div>
                                </div>
                                <div className='text-center h-20 mb-2'>
                                    <div className='pt-2 pb-1'>
                                        <span className='text-3.5 font-semibold text-black'>{item.name}</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.price}</span>
                                        <span className='line-through text-3'>{item.discount}</span>
                                    </div>
                                </div>
                                <div className='bg-red-600 hover:bg-red-800 text-center p-1 rounded-1 shadow-soft-2xl'>
                                    <Link to='#'>
                                        <div>
                                            <button className='text-3.5 font-semibold text-white'>Xem chi tiết</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}
export default FlashSale