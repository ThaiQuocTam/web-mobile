import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../Assets/images/logo.jpg'
import { listProductGroupSelector, signInSelector, getInfoUserSelector } from '../redux/selector/index'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions'
import SignIn from 'components/Sign-in/SignIn';
import axios from 'axios';

const Header = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch()
    const listProductGroup = useSelector(listProductGroupSelector)
    const signData = useSelector(signInSelector)
    const infoUserSelector = useSelector(getInfoUserSelector)

    const [hidden, setHidden] = useState(false)
    const [stateProductGroup, setStateProductGroup] = useState([])
    const [stateSoluong, setStateSoluong] = useState(0)
    const [showModalSignIn, setShowModalSignIn] = useState(false)
    const [email, setEmail] = useState()
    const [stateValueSearch, setStateValuSearch] = useState('')
    const [stateListSearchProduct, setStateListSearchProduct] = useState()
    const [showNotification, setShowNotification] = useState(false)
    const [dataReview, setDataReview] = useState()
    const [infoUser, setInfoUser] = useState()
    const [listProduct, setListProduct] = useState()

    let emailLocal = localStorage.getItem("User")
    let listProductCartLocal = JSON.parse(localStorage.getItem('arrProduct'))

    useEffect(() => {
        let soLuong = 0
        if (listProductCartLocal && email) {
            listProductCartLocal.map((item) => {
                item.email === email ? soLuong = soLuong + item.So_luong : ''
            })
        }
        setStateSoluong(soLuong)
    }, [listProductCartLocal])

    useEffect(() => {
        dispatch(actions.getListProductGroupAction.getListProductGroupRequest())
    }, [])

    useEffect(() => {
        try {
            if (listProductGroup) {
                setStateProductGroup(listProductGroup)
            }
        } catch (e) {
            console.log(e);
        }
    }, [listProductGroup])

    const handleCloseModal = () => {
        setShowModalSignIn(false)
    }

    useEffect(() => {
        if (emailLocal || signData) {
            setEmail(emailLocal)
            dispatch(actions.getInfoUserAction.getInfoUserRequest(emailLocal))
        }
    }, [emailLocal || signData])

    useEffect(() => {
        if (stateValueSearch !== '') {
            axios.get(`http://localhost:7001/api/get-search-product?Ten_san_pham=${stateValueSearch}`)
                .then(listProduct => setStateListSearchProduct(listProduct.data))
                .catch(e => console.log(e))
        }
        else {
            setStateListSearchProduct()
        }
    }, [stateValueSearch])

    useEffect(() => {
        if (infoUserSelector) {
            setInfoUser(infoUserSelector)
            axios.get(`http://localhost:7001/api/get-list-product`)
                .then(listData => setListProduct(listData.data))
                .catch(e => console.log(e))
        }
    }, [infoUserSelector])

    useEffect(() => {
        if (infoUser) {
            if (infoUser.Id_phan_quyen === 7) {
                axios.get(`http://localhost:7001/api/get-info-review-not-response`)
                    .then(info => setDataReview(info.data))
                    .catch(e => console.log(e))
            }
        }
    }, [infoUser || dataReview])

    return (
        <>
            <header className='h-200 px-5 z-10 mb-10 bg-white'>
                <div className='flex items-center content-center pl-24'>
                    <div className='w-15pc h-15pc'>
                        <Link to='/' className='w-full h-full block'>
                            <img className='w-full h-full' src={image} />
                        </Link>
                    </div>
                    <ul className=''>
                        <li className='inline-block mr-10'>
                            <div className='relative'>
                                <input
                                    value={stateValueSearch}
                                    onChange={(e) => setStateValuSearch(e.target.value)}
                                    className='border focus:outline-none border-green-700 hover:border-green-900 focus:border placeholder:text-3.5 placeholder:text-slate-500 focus:border-green-900 rounded-5 h-10 w-120 mr-3 pl-5' type={'text'} placeholder='Nhập sản phẩm cần tìm...' />
                                <a href='#' className='inline-block'><i className="bi bi-search text-7 cursor-pointer text-gray-700"></i></a>
                            </div>
                            {
                                stateListSearchProduct ?
                                    <div className='mt-1 absolute bg-slate-100  rounded-2 p-3 max-h-96 overflow-auto z-30 cursor-pointer' style={{ width: '525px' }}>
                                        {
                                            stateListSearchProduct.map((item) => (
                                                <div onClick={() => { localStorage.setItem("idProduct", item.id); navigate(`/DetailProduct?Ten_san_pham=${item.Ten_san_pham}`); setStateListSearchProduct(); setStateValuSearch('') }} className='flex mb-3 hover:bg-slate-50 p-1'>
                                                    <div className="mt-1 w-16 mr-5">
                                                        <img className='w-full' src={item.Hinh_anh} />
                                                    </div>
                                                    <div className='mr-5 mt-5'>
                                                        <span className='text-4 text-gray-800 font-semibold w-96 max-w-96 block overflow-hidden'>{item.Ten_san_pham}</span>
                                                        <div className='mt-1'>
                                                            <span className='mr-30 text-3.5 text-gray-700 font-semibold'>{item.Gia_san_pham.toLocaleString()}  ₫</span>
                                                            <span className='text-3.2 text-red-800 line-through '>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}  ₫</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div> : ''
                            }


                        </li>
                        <Link to='/Cart'>
                            <li className='inline-block mr-10 text-5 hover:opacity-50'>
                                <a className='inline-block' href='#'>
                                    <i className="bi bi-cart2 inline-block text-green-900 text-6 pr-1"></i>
                                    <span className='w-7 h-7 text-center inline-block text-white text-3.5 p-1 bg-orange-500 rounded-2'>
                                        {stateSoluong || 0}
                                    </span>
                                </a>
                            </li>
                        </Link>
                        {/* <Link to='/Cart'> */}
                        <li className='inline-block mr-10 text-5 relative'>
                            {/* <a className='inline-block hover:opacity-50 ' href='#'> */}
                            <i class="bi bi-circle-fill absolute text-orange-500 text-3 right-0 cursor-pointer"></i>
                            <i onClick={() => setShowNotification(!showNotification)} className="bi bi-bell-fill cursor-pointer inline-block text-green-900 text-6 pr-1"></i>
                            {/* </a> */}
                            {
                                showNotification &&
                                <div className='w-72 animate-modalForm rounded-2 shadow-soft-xxs absolute bg-slate-50  pl-5 p-4 h-90 z-50 overflow-auto'>
                                    {
                                        emailLocal ?
                                            showNotification &&
                                            <>
                                                <span className='font-semibold' style={{ 'font-family': 'sans-serif' }}>Thông báo</span>
                                                <div className='flex mt-2 mb-2'>
                                                    <div className='mr-10 bg-sky-100 p-1 rounded-2 px-2'>
                                                        <span className='text-3.5 font-black' style={{ 'color': '#1877f2' }}>Chưa đọc</span>
                                                    </div>
                                                    <div className='p-1 rounded-2 px-2'>
                                                        <span className='text-3.5 font-black'>Đã đọc</span>
                                                    </div>
                                                </div>
                                                {
                                                    dataReview ?
                                                        dataReview.map((item) => (
                                                            listProduct.map((itemProduct => (
                                                                item.Id_san_pham === itemProduct.id ?
                                                                    <div className='mb-2 hover:bg-slate-400 hover:text-white p-2 rounded-2'>
                                                                        <a onClick={() => localStorage.setItem("idProduct", itemProduct.id)} href='/DetailProduct#Review'>
                                                                            <span className='text-3.2 font-bold mr-1'>{item.Ten_nguoi_dung}</span>
                                                                            <span className='text-3.2 mr-1'>Đã bình luận về sản phẩm</span>
                                                                            <span className='text-3.2 font-semibold'>{itemProduct.Ten_san_pham}</span>
                                                                        </a>
                                                                    </div> : ''
                                                            )))
                                                        )) : ''
                                                }
                                            </> :
                                            <div className='text-center'>
                                                <span className='text-3.5  text-red-600 font-semibold'>Vui Lòng đăng nhập</span>
                                            </div>
                                    }
                                </div>
                            }

                        </li>
                        {/* </Link> */}
                        <li className='inline-block mr-10 hover:opacity-50'>
                            <a href='/OrderLookup'>
                                <div className='cursor-pointer'>
                                    <i className="bi bi-clock-history text-6 pr-2 text-green-700"></i>
                                    <span className='inline-block pb-2 text-3.5 font-semibold'>Tra cứu đơn hàng</span>
                                </div>
                            </a>
                        </li>
                        {
                            email ?
                                <li onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)} className='inline-block mr-10'>
                                    <div className='cursor-pointer'>
                                        <i className="bi bi-person-fill text-6 pr-2 text-green-700"></i>
                                        <span className='font-semibold text-3.5 relative' >{email}</span>
                                    </div>
                                    {
                                        hidden && <a href='/' onClick={() => localStorage.removeItem('User')} className='absolute bg-slate-500 w-28 h-8 leading-8 text-center rounded-2 right-10 cursor-pointer hover:opacity-75 animate-modalForm'>
                                            <span className='text-white text-3.5'>Đăng xuất</span>
                                            <i class="bi bi-caret-up-fill absolute position-top_-19 left-1 text-slate-500"></i>
                                        </a>
                                    }

                                </li>

                                :
                                <li className='inline-block mr-10 hover:opacity-50'>
                                    <div onClick={() => setShowModalSignIn(true)} className='cursor-pointer'>
                                        <i className="bi bi-person-fill text-6 pr-2 text-green-700"></i>
                                        <span className='font-semibold text-3.5 left-4 right ' >Đăng nhập</span>
                                    </div>
                                </li>
                        }
                    </ul>
                </div >

                <div className='px-32 mt-2 '>
                    <div className='w-full flex justify-center leading-12 items-center bg-green-300 rounded-2 '>
                        {
                            stateProductGroup.map((item) => (
                                <>
                                    <Link onClick={() => { localStorage.setItem("idProductGroup", item.id); localStorage.setItem("nameProductGroup", item.Ten_nhom) }} to={`/ListProduct?${item.Ten_nhom}`} className='font-semibold hover:bg-green-950 hover:text-white px-2 inline-block h-12 text-gray-900 uppercase text-4 mr-14'>
                                        {item.Ten_nhom}
                                    </Link>
                                </>
                            ))
                        }
                    </div>
                </div >
            </header >
            <div>
                {showModalSignIn && <div className='fixed flex z-sticky items-center bg-slate-950 justify-center left-0 top-0 right-0 bottom-0'>
                    <SignIn isClose={handleCloseModal} />
                </div>}
            </div>
        </>

    )
}

export default Header