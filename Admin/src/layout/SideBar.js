import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import * as actions from '../../redux/actions/actions'

const SideBar = () => {

    const [showChildNav, setShowChildNav] = useState(false)

    const navClassName = ({ isActive }) => {
        return isActive ? 'block p-2 border-2 border-slate-50 pl-8 bg-slate-100 text-sky-500 font-semibold rounded-5' : 'block p-2 font-semibold text-gray-700 border-2 border-slate-50 rounded-5 pl-8 hover:border-gray-500 hover:text-sky-500'
    }

    const navChildClassName = ({ isActive }) => {
        return isActive ? 'p-2 block w-full pl-16 mb-2 border border-sky-600 rounded-2 text-sky-500' : 'p-2 mb-2 block w-full pl-16 border border-white hover:border-sky-600 rounded-2 hover:text-sky-500'
    }

    return (
        <>
            <div className='w-20pc fixed z-20 h-full bg-slate-50 shadow-soft-lg'>
                <div className='w-full h-20 leading-20 text-center bg-blue-400'><i class="bi bi-menu-button-wide-fill text-6 text-white"></i><span className='text-6 text-white ml-2 font-semibold'>MENU</span></div>
                <div className=''>
                    <ul>
                        <li className='w-full border-b border-slate-100'>
                            <div className='p-2'>
                                <NavLink to='/home' className={navClassName}>
                                    <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                        <i class="bi text-3 bi-grid-fill mx-1"></i>
                                    </div>
                                    <span className='text-4 ml-2'>Trang chủ</span>
                                </NavLink>
                            </div>
                        </li>

                        <li className='w-full border-b border-slate-100 relative block'>
                            <div className='p-2 relative'>
                                <NavLink to='/QlSanPham' className={navClassName}>
                                    <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                        <i class="bi text-4 w-full mx-1 bi-command"></i>
                                    </div>
                                    <span className='text-4 ml-2'>Sản phẩm</span>
                                </NavLink>
                                <i onClick={() => setShowChildNav(!showChildNav)} className='bi bi-caret-down-fill text-gray-600 absolute top-5     right-5 text-5 hover:text-sky-500'></i>
                            </div>

                        </li>
                        {
                            showChildNav && <li className='w-full animate-childNav p-2 font-semibold text-gray-600 px-2 text-3.5 b bg-white block'>
                                <NavLink to='/QlNhomSP' className={navChildClassName}>
                                    <i class="bi w-full bi-calendar2-event mx-1"></i>
                                    <span className=' ml-2'>Nhóm sản phẩm</span>
                                </NavLink>
                                <NavLink to='/QlLoaiSanPham' className={navChildClassName}>
                                    <i class="bi w-full bi-calendar2-event mx-1"></i>
                                    <span className=' ml-2'>Loại sản phẩm</span>
                                </NavLink>
                            </li>
                        }



                        <li className='w-full border-b border-slate-100 block'>
                            <div className='p-2'>
                                <NavLink to='/QlHoaDon' className={navClassName}>
                                    <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                        <i class="bi text-4 w-full bi-clipboard-data-fill mx-1"></i>
                                    </div>
                                    <span className='text-4 ml-2'>Hóa đơn</span>
                                </NavLink>
                            </div>
                        </li>

                        <li className='w-full border-b border-slate-100'>
                            <div className='p-2'>
                                <NavLink to='/QlThanhVien' className={navClassName}>
                                    <div className='inline-block p-1 bg-slate-50 font-semibold rounded-2 shadow-soft-2xl'>
                                        <i class="bi text-4 w-full mx-1 bi-person-lines-fill"></i>
                                    </div>
                                    <span className='text-4 ml-2'>Thành viên</span>
                                </NavLink>
                            </div>
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