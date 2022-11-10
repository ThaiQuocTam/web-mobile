import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideBar = () => {

    const navClassName = ({ isActive }) => {
        return isActive ? 'block p-2 border-2 border-slate-50 pl-8 bg-slate-100 text-sky-500 font-semibold rounded-5' : 'block p-2 font-semibold text-gray-700 border-2 border-slate-50 rounded-5 pl-8 hover:border-gray-500'
    }

    return (
        <>
            <div className='w-20pc fixed z-20 h-full bg-slate-50'>
                <div className='w-full h-20 leading-20 text-center bg-blue-400'><i class="bi bi-menu-button-wide-fill text-6 text-white"></i><span className='text-6 text-white ml-2 font-semibold'>MENU</span></div>
                <div className=''>
                    <ul>
                        <li className='w-full p-2 border-b border-slate-100'>
                            <NavLink to='/home' className={navClassName}>
                                <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                    <i class="bi text-3 bi-grid-fill mx-1"></i>
                                </div>
                                <span className='text-4 ml-2'>Trang chủ</span>
                            </NavLink>
                        </li>

                        <li className='w-full p-2 border-b border-slate-100'>
                            <NavLink to='/QlSanPham' className={navClassName}>
                                <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                    <i class="bi text-4 w-full bi-command"></i>
                                </div>
                                <span className='text-4 ml-2'>Sản phẩm</span>
                            </NavLink>
                        </li>

                        <li className='w-full p-2 border-b border-slate-100'>
                            <NavLink to='/QlHoaDon' className={navClassName}>
                                <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                    <i class="bi text-4 w-full bi-clipboard-data-fill"></i>
                                </div>
                                <span className='text-4 ml-2'>Hóa đơn</span>
                            </NavLink>
                        </li>

                        <li className='w-full p-2 border-b border-slate-100'>
                            <NavLink to='/QlThanhVien' className={navClassName}>
                                <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                    <i class="bi text-4 w-full bi-person-lines-fill"></i>
                                </div>
                                <span className='text-4 ml-2'>Thành viên</span>
                            </NavLink>
                        </li>
                        {/* <NavLink to='/QlSanPham' className={navClassName}>
                            <li className='w-full p-4 pl-8 hover:bg-slate-500'><i class="bi text-4 text-black mr-3 bi-command"></i><span className='text-4 text-black '>Quản lý sản phẩm</span></li>
                        </NavLink>
                        <NavLink to='/QlHoaDon'>
                            <li className='w-full p-4 border-gray-600 pl-8 hover:bg-slate-500'><i class="bi text-4 text-black mr-3 bi-clipboard-data-fill"></i><span className='text-4 text-black '>Quản lý hóa đơn</span></li>
                        </NavLink>
                        <NavLink to='/QlThanhVien'>
                            <li className='w-full p-4 border-gray-600 pl-8 hover:bg-slate-500'><i class="bi text-4 text-black mr-3 bi-person-lines-fill"></i><span className='text-4 text-black '>Thành viên</span></li>
                        </NavLink> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar