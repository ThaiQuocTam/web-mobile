import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import * as actions from '../../redux/actions'
import { listTopSmartphoneSelector } from 'redux/selector';
import LimitProduct from './LimitProduct';

const FlashSale = () => {

    const dispatch = useDispatch(useDispatch)
    const listTopSmartphone = useSelector(listTopSmartphoneSelector)
    const [listSmartphone, setListSmartphone] = useState([])
    const [discount, setDiscount] = useState()

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {

        }
    };

    useEffect(() => {
        dispatch(actions.topSmartphoneAction.topSmartphoneRequest())
    }, [])

    useEffect(() => {
        try {
            setListSmartphone(listTopSmartphone.listProductSmartphone)
        } catch (e) {

        }
    }, [listTopSmartphone])

    return (
        <>

            <div className='px-24 shadow-soft-xxs bg-green-150'>
                <Slider {...settings}>
                    {
                        listSmartphone.map((item) => (
                            <div className='p-5 mx-5 h-90 box-shadow relative rounded-2 bg-white'>
                                {
                                    item.So_luong_SP <= 5 ? <LimitProduct /> : ''

                                }
                                <div className=''>
                                    <div className=''>
                                        <img className='mx-auto' src='https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/08/02/combo-product-reno8-z-gold.png' />
                                    </div>
                                </div>
                                <div className='text-center h-20 mb-2'>
                                    <div className='pt-2 pb-1'>
                                        <span className='text-3.5 font-semibold text-black'>{item.Ten_san_pham}</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.Gia_san_pham.toLocaleString()} ₫</span>
                                        <span className='line-through text-3'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}  ₫</span>
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