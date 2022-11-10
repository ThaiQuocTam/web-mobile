import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../Assets/images/logo.jpg'
import { listProductGroupSelector, signInSelector } from '../redux/selector/index'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions'
import SignIn from 'components/Sign-in/SignIn';

const Header = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch()
    const listProductGroup = useSelector(listProductGroupSelector)
    const signData = useSelector(signInSelector)

    const [hidden, setHidden] = useState(false)
    const [stateProductGroup, setStateProductGroup] = useState([])
    const [stateSoluong, setStateSoluong] = useState(0)
    const [showModalSignIn, setShowModalSignIn] = useState(false)
    const [email, setEmail] = useState()

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
        }
    }, [emailLocal || signData])

    return (
        <>
            <header className='h-200 px-5 z-10 mb-10 bg-white'>
                <div className='flex items-center pl-24'>
                    <div className='w-15pc h-15pc'>
                        <Link to='/' className='w-full h-full block'>
                            <img className='w-full h-full' src={image} />
                        </Link>
                    </div>
                    <ul className=''>
                        <li className='inline-block mr-24'>
                            <div>
                                <input className='border focus:outline-none border-green-700 hover:border-green-900 focus:border placeholder:text-3.5 placeholder:text-slate-500 focus:border-green-900 rounded-5 h-10 w-120 mr-3 pl-5' type={'text'} placeholder='Nhập sản phẩm cần tìm...' />
                                <a href='#' className='inline-block'><i className="bi bi-search text-7 cursor-pointer text-gray-700"></i></a>
                            </div>
                        </li>
                        <Link to='/Cart'>
                            <li className='inline-block mr-14 text-6 hover:opacity-50'>
                                <a className='inline-block' href='#'>
                                    <i className="bi bi-cart2 inline-block text-green-900 text-7 pr-1"></i>
                                    <span className='w-7 h-7 text-center inline-block text-white text-3.5 p-1 bg-orange-500 rounded-2'>
                                        {stateSoluong || 0}
                                    </span>
                                </a>
                            </li>
                        </Link>
                        <li className='inline-block mr-14 hover:opacity-50'>
                            <Link to='/OrderLookup'>
                                <div className='cursor-pointer'>
                                    <i className="bi bi-clock-history text-6 pr-2 text-green-700"></i>
                                    <span className='inline-block pb-2 text-3.5 font-semibold'>Tra cứu đơn hàng</span>
                                </div>
                            </Link>
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
                {/* <div className='mt-5 mr-28 ml-4 p-1 bg-green-300 flex rounded-2'>
                    <ul className=''>
                        <Link to='/ListSmartphone'>
                            <li
                                onMouseEnter={() => {
                                    setMouseSmartphone('block w-86px h-2px bg-black animate-onMouseCss rounded-5');
                                }}
                                onMouseLeave={() => setMouseSmartphone('')}
                                className='inline-block mr-32 mt-1 overflow-hidden cursor-pointer'>
                                <span className='font-medium mr-1 uppercase'>Điện thoại</span>
                                <i className="bi bi-phone-fill text-5 text-green-700"></i>
                                <div className='h-2px'>
                                    <span className={mouseSmartphone} ></span>
                                </div>
                            </li>
                        </Link>
                        <Link to='/ListLaptop'>
                            <li
                                onMouseEnter={
                                    () => {
                                        setMouseLaptop('block w-18 h-2px bg-black animate-onMouseCss rounded-5');
                                    }
                                }
                                onMouseLeave={() => setMouseLaptop('')}
                                className='inline-block mr-32 overflow-hidden cursor-pointer'>
                                <span className='font-medium mr-1 uppercase text-3.5'>LAPTOP</span>
                                <i className="bi bi-laptop text-5 text-green-900"></i>
                                <div className='h-2px'>
                                    <span className={mouseLaptop} ></span>
                                </div>
                            </li>
                        </Link>
                        <Link to='/ListAccessory'>
                            <li
                                onMouseEnter={
                                    () => {
                                        setMouseAccessory('block w-18 h-2px bg-black animate-onMouseCss rounded-5');
                                    }
                                }
                                onMouseLeave={() => setMouseAccessory('')}
                                className='inline-block mr-32 overflow-hidden cursor-pointer'>
                                <span className='font-medium mr-1 uppercase'>Phụ kiện</span>
                                <i className="bi bi-tablet-landscape-fill text-5 text-green-700"></i>
                                <div className='h-2px'>
                                    <span className={mouseAccessory}> </span>
                                </div>
                            </li>
                        </Link>
                        <Link to='/ListTablet'>
                            <li
                                onMouseEnter={
                                    () => {
                                        setMouseTablet('block w-28 h-2px bg-black animate-onMouseCss rounded-5');
                                        setMouseSmartphone('')
                                    }
                                }
                                onMouseLeave={() => setMouseTablet('')}
                                className='inline-block mr-32 overflow-hidden cursor-pointer'>
                                <span className='font-medium mr-1 uppercase'>Máy tính bảng</span>
                                <i className="bi bi-tablet-landscape-fill text-5 text-green-700"></i>
                                <div className='h-2px'>
                                    <span className={mouseTablet} ></span>
                                </div>
                            </li>
                        </Link>
                    </ul >
                    <div>
                        <Link>
                            Điện thoại
                        </Link>
                    </div>
                </div > */}
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