import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import * as actions from '../../redux/actions'
import { listTopSmartphoneSelector } from 'redux/selector';
import LimitProduct from './LimitProduct';
import ShowButton from 'components/List-san-pham/ShowButton';

const FlashSale = () => {

    const dispatch = useDispatch(useDispatch)
    const listTopSmartphone = useSelector(listTopSmartphoneSelector)
    const [listSmartphone, setListSmartphone] = useState([])
    const navigate = useNavigate()

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
        dispatch(actions.topSmartphoneAction.topSmartphoneRequest(1))
    }, [])

    useEffect(() => {
        try {
            setListSmartphone(listTopSmartphone.listProductSmartphone)
        } catch (e) {

        }
    }, [listTopSmartphone])

    useEffect(() => {
        try {
            if (listSmartphone) {

            }
            else {
                console.log('Khong có');
            }
        } catch (e) {
            console.log('Lỗi kết nói :', e);
        }
    }, [listSmartphone])

    return (
        <>
            <div className='px-24 shadow-soft-xxs bg-green-150'>
                <Slider {...settings}>
                    {
                        listSmartphone.map((item) => (
                            <div className='p-5 mx-5 h-96 box-shadow relative rounded-2 bg-white'>
                                {
                                    item.So_luong_SP <= 5 ? <LimitProduct soLuong={item.So_luong_SP} /> : ''

                                }
                                <div className=''>
                                    <div className='w-full '>
                                        <img className='mx-auto w-10/12' src={item.Hinh_anh} />
                                    </div>
                                </div>
                                <div className='text-center h-20 mb-2'>
                                    <div className='pt-2 pb-1  max-h-16 h-16 overflow-hidden'>
                                        <span className='text-3.5 font-semibold text-black'>{item.Ten_san_pham} - Chính hãng</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.Gia_san_pham.toLocaleString()} ₫</span>
                                        <span className='line-through text-3'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}  ₫</span>
                                    </div>
                                </div>
                                {/* <div onClick={() => {
                                    navigate(`/DetailProduct?Ten_san_pham=${item.Ten_san_pham}`);
                                    dispatch(actions.getInfoProductAction.getInfoProductRequest(item.id))
                                }} className='bg-red-600 mt-8 hover:bg-red-800 text-center p-1 rounded-1 shadow-soft-2xl'>
                                    <div>
                                        <button className='text-3.5 font-semibold text-white'>Xem chi tiết</button>
                                    </div>
                                </div> */}
                                <div className='mt-8'>
                                    <ShowButton Id={item.id} nameProduct={item.Ten_san_pham} />
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