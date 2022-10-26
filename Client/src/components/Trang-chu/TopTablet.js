import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import * as actions from '../../redux/actions'
import { listTopTabletReducer } from 'redux/selector';
import LimitProduct from './LimitProduct';

const TopTablet = () => {

    const dispatch = useDispatch(useDispatch)
    const listTablet = useSelector(listTopTabletReducer)
    const [stateListTablet, setStateListTablet] = useState([])
    const navigate = useNavigate()

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
    };

    useEffect(() => {
        dispatch(actions.getListTopTabletAction.getListTopTabletRequest(3))
    }, [])

    useEffect(() => {
        try {
            setStateListTablet(listTablet.listProductSmartphone)
        } catch (e) {

        }
    }, [listTablet])

    useEffect(() => {
        try {
            if (stateListTablet) {

            }
            else {
                console.log('Khong có');
            }
        } catch (e) {
            console.log('Lỗi kết nói :', e);
        }
    }, [stateListTablet])

    return (
        <>
            <div className='pl-24 mt-8 mb-5'>
                <div className='bg-green-950 max-w-75 p-1 pl-5 border-l-25 border-green-200 rounded-1'>
                    <span className='text-4 font-semibold text-white uppercase'>TOP láp tóp bán chạy </span>
                </div>
            </div>
            <div className='px-24 shadow-soft-xxs bg-green-150'>
                <Slider {...settings}>
                    {
                        stateListTablet.map((item, index) => (
                            <div className='p-5 mx-5 h-26em box-shadow relative rounded-2 bg-white'>
                                {
                                    item.So_luong_SP <= 5 ? <LimitProduct soLuong={item.So_luong_SP} /> : ''

                                }
                                <div className=''>
                                    <div className=''>
                                        <img className='mx-auto w-full' src={item.Hinh_anh} />
                                    </div>
                                </div>
                                <div className='text-center h-24 mb-2'>
                                    <div className='pt-2 pb-1 max-h-16 h-16 overflow-hidden'>
                                        <span className='text-3.5 font-semibold text-black'>{item.Ten_san_pham}</span>
                                    </div>
                                    <div className='pb-2'>
                                        <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.Gia_san_pham.toLocaleString()}<span className='ml-1'>₫</span></span>
                                        <span className='line-through text-3'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}<span className='ml-1'>₫</span></span>
                                    </div>
                                </div>
                                <div onClick={() => {
                                    navigate('/DetailProduct');
                                    dispatch(actions.getInfoProductAction.getInfoProductRequest(item.id))
                                }} className='bg-red-600 cursor-pointer hover:bg-red-800 text-center p-1 rounded-1 shadow-soft-2xl'>
                                    <div>
                                        <button className='text-3.5 font-semibold text-white'>Xem chi tiết</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default TopTablet