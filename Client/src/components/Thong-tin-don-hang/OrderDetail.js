import BackHome from 'components/Trang-chu/BackHome'
import React from 'react'
import './OrderDetail.css';

const OrderDetail = () => {
    return (
        <>
            <div>
                <BackHome />
            </div>
            <div >
                <div class="flex flex-col mx-auto w-10/12">
                    <div className='text-center'>
                        <i class="bi bi-check2-circle text-16 cursor-pointer leading-4-em block text-green-900"></i>
                    </div>
                    <div className="mt-4">
                        <h2 className='text-center font-medium text-black font-sans'>THÔNG TIN ĐƠN HÀNG </h2>
                    </div>
                    <div className="mt-4">
                        <label className='labelone font-bold mb-3 '>Thông tin người đặt hàng</label>
                        <div class="border border-gray-400 w-full rounded-3 pl-5" >
                            <div class="divide-y divide-dashed ">
                                <div className='grid grid-cols-3 divide-x' >
                                    <label className='labelone'>Họ và tên: </label>
                                    <div className=''>
                                        <label className='labelone'> Nguyễn Trung Nghĩa</label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 divide-x' >
                                    <label className='labelone'>Số điện thoại: </label>
                                    <div className='labelone'>
                                        <label className=''> 0388339515</label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 divide-x' >
                                    <label className='labelone'>Email: </label>
                                    <div className=''>
                                        <label className='labelone'> NN@gmail.com</label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 divide-x' >
                                    <label className='labelone'>Địa chỉ: </label>
                                    <div className=''>
                                        <label className='labelone'> Gia Lai</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <label className='labelone font-bold mb-3'>Danh sách sản phẩm</label>
                        <table class=" border-separate border-spacing-2 border-0 border-green-900 w-full ">
                            <thead className='bg-green-700 text-white'>
                                <tr>
                                    <th className='labelone border border-slate-900 text-center'>STT</th>
                                    <th className='labelone border border-slate-900 text-center'>Tên sản phẩm</th>
                                    <th className='labelone border border-slate-900 text-center'>Số lượng</th>
                                    <th className='labelone border border-slate-900 text-center'>Giá</th>
                                    <th className='labelone border border-slate-900 text-center'>Tổng (Số lượng x giá)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='labelone border border-slate-900 text-center'>1</td>
                                    <td className='labelone border border-slate-900 text-center'>Điện thoại Nokia</td>
                                    <td className='labelone border border-slate-900 text-center'>2</td>
                                    <td className='labelone border border-slate-900 text-center'>20000đ</td>
                                    <td className='labelone border border-slate-900 text-center'>50000000đ</td>

                                </tr>
                                <tr>
                                    <td className='labelone border border-slate-900 text-center'>2</td>
                                    <td className='labelone border border-slate-900 text-center'>Điện thoại samsung</td>
                                    <td className='labelone border border-slate-900 text-center'>10</td>
                                    <td className='labelone border border-slate-900 text-center'>25000đ</td>
                                    <td className='labelone border border-slate-900 text-center'>25000000đ</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>




    )
}

export default OrderDetail