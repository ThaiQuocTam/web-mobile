import React, { useState } from 'react'
import ModalThemTV from './ModalThemTV'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/actions'
import { Link } from 'react-router-dom';

const QlThanhVien = () => {
    const [showModalAddMember, setShowModalAddMember] = useState(false)

    const dispatch = useDispatch()



    const hideModalAddMember = () => {
        setShowModalAddMember(false)
    }
    return (
        <>
            <div className='font-bold text-3xl mb-3'>Danh sách hóa đơn</div>
            <div className='w-full mt-4'>
                <div className='inline-block'>
                    <input className='border focus:outline-none border-green-700 text-3.5 hover:border-green-900 focus:border placeholder:text-3 placeholder:text-slate-500 focus:border-green-900 rounded-5 h-10 w-96 mr-3 px-5' type={'text'} placeholder='Nhập sản phẩm cần tìm...' />
                    <a className='inline-block h-10 leading-10' href='#'><i className="bi bi-search text-gray-600 h-10 inline-block hover:text-black text-5 cursor-pointer leading-10"></i></a>
                </div>
                <div className="leading-9 h-9 mb-5 inline-block ml-30rem" onClick={() => setShowModalAddMember(true)}>
                    <strong className='text-3.5 text-black border-gray-500 border-2 px-3 pr-5 py-3 ml-2 rounded-2 cursor-pointer hover:bg-slate-600 hover:text-white'> + &ensp; Thêm Thành Viên</strong>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-400 border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            STT
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Họ và tên
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Tên tài khoản
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Giới tính
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Quyền
                                        </th>

                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Trạng thái
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Nguyễn Trung Nghĩa
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            nn@gmail.com
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Nghia123
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Nam
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Admin
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                            <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">Xóa</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showModalAddMember &&

                <div className='fixed flex z-sticky items-center bg-slate-250 justify-center left-0 top-0 right-0 bottom-0'>
                    <ModalThemTV isClose={hideModalAddMember} />
                </div>
            }
        </>
    )
}

export default QlThanhVien