import React from 'react'
import image from '../Assets/images/picwish.jpg'

const Header = () => {
    return (
        <>
            <header className='h-200 p-5 bg-green-100 pl-30'>
                <div className=''>
                    <div className='float-left h-40 w-40 relative position-top mr-10'>
                        <a href='#' className='block w-full h-full'>
                            <img className='w-full h-full' src={image} />
                        </a>
                    </div>
                    <ul className=''>
                        {/* <li className='inline-block mr-10 '>
                            <a href='#' className='block w-5 h-5'>
                                <img className='w-full h-full' src={image} />
                            </a>
                        </li> */}
                        <li className='inline-block mr-16'>
                            <div>
                                <input className='border focus:outline-none border-green-700 hover:border-green-900 focus:border placeholder:text-3.5 placeholder:text-slate-500 focus:border-green-900 rounded-5 h-10 w-90 mr-3 pl-5' type={'text'} placeholder='Nhập sản phẩm cần tìm...' />
                                <a href='#'><i className="bi bi-search text-7 cursor-pointer leading-6-em block float-right"></i></a>
                            </div>
                        </li>
                        <li className='inline-block mr-14 hover:opacity-50'>
                            <a href='#'>
                                <span className='font-semibold'>Điện thoại</span>
                                <i className="bi bi-phone-fill text-5 text-green-700"></i>
                            </a>
                        </li>
                        <li className='inline-block mr-14 hover:opacity-50'>
                            <a href='#'>
                                <span className='font-semibold mr-1'>Máy tính bảng</span>
                                <i className="bi bi-tablet-landscape-fill text-5 text-green-700"></i>
                            </a>
                        </li>
                        <li className='inline-block mr-14 text-6 hover:opacity-50'>
                            <a className='inline-block' href='#'>
                                <i className="bi bi-cart2 inline-block text-green-900 text-7 pr-1"></i>
                                <span className='w-8 text-center text-white text-4 p-1 bg-orange-500 rounded-2 block float-right'>
                                    0
                                </span>
                            </a>
                        </li>
                        <li className='inline-block mr-14 hover:opacity-50'>
                            <a href='#'>
                                <i className="bi bi-clock-history text-6 pr-2 text-green-700"></i>
                                <span className='inline-block pb-2 font-semibold'>Tra cứu đơn hàng</span>
                            </a>
                        </li>
                        <li className='inline-block mr-10 hover:opacity-50'>
                            <div className='cursor-pointer'>
                                <i className="bi bi-person-fill text-6 pr-2 text-green-700"></i>
                                <span className='font-semibold'>Đăng nhập</span>
                            </div>
                        </li>
                    </ul>
                </div >
                {/* <div className='text-center m-5'>
                    <ul className=''>
                        <li className='inline-block'>
                            <a href='#'>
                                <span>Điện thoại</span>
                                <i className="bi bi-phone-fill"></i>
                            </a>
                        </li>
                        <li className='inline-block'>
                            <a href='#'>
                                <span>Máy tính bảng</span>
                                <i className="bi bi-tablet-landscape-fill"></i>
                            </a>
                        </li>
                    </ul >
                </div > */}
            </header >
        </>

    )
}

export default Header