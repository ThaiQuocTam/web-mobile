import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../Assets/images/picwish.jpg'

const Header = () => {

    const [mouseSmartphone, setMouseSmartphone] = useState('')
    const [mouseTablet, setMouseTablet] = useState('')
    const [hidden, setHidden] = useState(false)

    let email = localStorage.getItem("User")

    return (
        <>
            <header className='h-200 p-5 pl-30 z-10'>
                <div className=''>
                    <div className='float-left h-40 w-40 relative position-top mr-10'>
                        <Link to='/' className='block w-full h-full'>
                            <img className='w-full h-full' src={image} />
                        </Link>
                    </div>
                    <ul className=''>
                        <li className='inline-block mr-24'>
                            <div>
                                <input className='border focus:outline-none border-green-700 hover:border-green-900 focus:border placeholder:text-3.5 placeholder:text-slate-500 focus:border-green-900 rounded-5 h-10 w-120 mr-3 pl-5' type={'text'} placeholder='Nhập sản phẩm cần tìm...' />
                                <a href='#'><i className="bi bi-search text-7 cursor-pointer leading-6-em block float-right"></i></a>
                            </div>
                        </li>
                        <Link to='/Cart'>
                            <li className='inline-block mr-14 text-6 hover:opacity-50'>
                                <a className='inline-block' href='#'>
                                    <i className="bi bi-cart2 inline-block text-green-900 text-7 pr-1"></i>
                                    <span className='w-7 h-7 text-center text-white text-3.5 p-1 pb-1 bg-orange-500 rounded-2 block float-right'>
                                        0
                                    </span>
                                </a>
                            </li>
                        </Link>
                        <li className='inline-block mr-14 hover:opacity-50'>
                            <Link to='/OderLookup'>
                                <div className='cursor-pointer'>
                                    <i className="bi bi-clock-history text-6 pr-2 text-green-700"></i>
                                    <span className='inline-block pb-2 text-3.5 font-semibold'>Tra cứu đơn hàng</span>
                                </div>
                            </Link>
                        </li>
                        {/* <li className='inline-block mr-10 hover:opacity-50'>
                            <Link to='/SignIn'>
                                <div className='cursor-pointer'>
                                    <i className="bi bi-person-fill text-6 pr-2 text-green-700"></i>
                                    <span className='font-semibold text-3.5' >Đăng nhập</span>
                                </div>
                            </Link>
                        </li> */}
                        {
                            email ?
                                <li onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)} className='inline-block mr-10'>
                                    <div className='cursor-pointer relative'>
                                        <i className="bi bi-person-fill text-6 pr-2 text-green-700"></i>
                                        <span className='font-semibold text-3.5' >{email}</span>
                                    </div>
                                    {
                                        hidden && <a to='/' onClick={() => localStorage.removeItem('User')} className='absolute bg-slate-500 w-28 h-8 leading-8 text-center rounded-2 right-7 cursor-pointer hover:opacity-75 animate-modalForm'>
                                            <span className='text-white text-3.5'>Đăng xuất</span>
                                            <i class="bi bi-caret-up-fill absolute position-top_-19 left-1 text-slate-500"></i>
                                        </a>
                                    }

                                </li>

                                :
                                <li className='inline-block mr-10 hover:opacity-50'>
                                    <a href='/SignIn'>
                                        <div className='cursor-pointer'>
                                            <i className="bi bi-person-fill text-6 pr-2 text-green-700"></i>
                                            <span className='font-semibold text-3.5 left-4 right ' >Đăng nhập</span>
                                        </div>
                                    </a>
                                </li>
                        }
                    </ul>
                </div >
                <div className='mt-5 mr-28 ml-4 p-1 bg-green-200 rounded-2'>
                    <ul className=''>
                        <Link to='/ListSmartphone'>
                            <li
                                onMouseEnter={() => {
                                    setMouseSmartphone('block w-86px h-2px bg-black animate-onMouseCss');
                                    setMouseTablet('')
                                }}
                                onMouseLeave={() => setMouseSmartphone('')}
                                className='inline-block mr-14 overflow-hidden cursor-pointer'>
                                <span className='font-medium mr-1'>Điện thoại</span>
                                <i className="bi bi-phone-fill text-5 text-green-700"></i>
                                <div className='h-2px'>
                                    <span className={mouseSmartphone} ></span>
                                </div>
                            </li>
                        </Link>
                        <Link to='/ListTablet'>
                            <li
                                onMouseEnter={
                                    () => {
                                        setMouseTablet('block w-28 h-2px bg-black animate-onMouseCss');
                                        setMouseSmartphone('')
                                    }
                                }
                                onMouseLeave={() => setMouseTablet('')}
                                className='inline-block mr-14 overflow-hidden cursor-pointer'
                                onClick={() => setActive()}>
                                <span className='font-medium mr-1'>Máy tính bảng</span>
                                <i className="bi bi-tablet-landscape-fill text-5 text-green-700"></i>
                                <div className='h-2px'>
                                    <span className={mouseTablet} ></span>
                                </div>
                            </li>
                        </Link>
                    </ul >
                </div >
            </header >
        </>

    )
}

export default Header