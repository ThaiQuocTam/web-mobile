import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {

    return (
        <>
            <div className='w-3/12 fixed z-20 h-full bg-gray-700'>
                <div className='w-full h-20 leading-20 text-center bg-gray-800'><i class="bi bi-menu-button-wide-fill text-6 text-white"></i><span className='text-6 text-white ml-2 font-semibold'>Menu</span></div>
                <div className=''>
                    <ul>
                        <NavLink to='/'>
                            <li className='w-full p-4 border-b border-gray-600 pl-8 hover:bg-slate-500 '>
                                <i class="bi text-4 w-full text-white mr-3 bi-grid-fill"></i>
                                <span className='text-4 text-white '>Trang chủ</span>
                            </li>
                        </NavLink>
                        <Link to='/QlSanPham'>
                            <li className='w-full p-4 border-b border-gray-600 pl-8 hover:bg-slate-500'><i class="bi text-4 text-white mr-3 bi-command"></i><span className='text-4 text-white '>Quản lý sản phẩm</span></li>
                        </Link>
                        <Link to='/QlHoaDon'>
                            <li className='w-full p-4 border-b border-gray-600 pl-8 hover:bg-slate-500'><i class="bi text-4 text-white mr-3 bi-clipboard-data-fill"></i><span className='text-4 text-white '>Quản lý hóa đơn</span></li>
                        </Link>
                        <Link to='/QlThanhVien'>
                            <li className='w-full p-4 border-b border-gray-600 pl-8 hover:bg-slate-500'><i class="bi text-4 text-white mr-3 bi-person-lines-fill"></i><span className='text-4 text-white '>Thành viên</span></li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar