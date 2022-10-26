import BackHome from 'components/Trang-chu/BackHome'
import React from 'react'

const OrderDetail = () => {
    return (
        <>
            <div >
                <div class="flex flex-col mx-auto w-10/12">
                    <div className='text-center'>
                        <i class="bi bi-check2-circle text-16 cursor-pointer leading-4-em block text-green-900"></i>
                    </div>
                    <div className="mt-4">
                        <span className='text-center block text-7 font-semibold text-black'>THÔNG TIN ĐƠN HÀNG </span>
                    </div>
                    <div className="mt-4">
                        <label className='font-bold mb-3 text-5'>Thông tin người đặt hàng</label>
                        <div class="border border-gray-400 py-2 w-full rounded-3 pl-5" >
                            <div class="divide-y divide-dashed ">
                                <div className='grid grid-cols-3 divide-x mb-1' >
                                    <label className='text-4'>Họ và tên: </label>
                                    <div className='pl-2'>
                                        <label className='text-3.5'> Nguyễn Trung Nghĩa</label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 divide-x mb-1' >
                                    <label className='text-4'>Số điện thoại: </label>
                                    <div className='pl-2'>
                                        <label className='text-3.5'> 0388339515</label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 divide-x mb-1' >
                                    <label className='text-4'>Email: </label>
                                    <div className='pl-2'>
                                        <label className='text-3.5'> NN@gmail.com</label>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 divide-x mb-1' >
                                    <label className='text-4'>Địa chỉ: </label>
                                    <div className='pl-2'>
                                        <label className='text-3.5'> Gia Lai</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <label className='text-5 font-bold mb-3'>Danh sách sản phẩm</label>
                        <table class="table-auto w-full rounded-3 border border-slate-200 border-collapse">
                            <thead className='bg-green-700 rounded-2 text-white leading-normal'>
                                <tr className=''>
                                    <th className='text-3.5 py-1 text-center'>STT</th>
                                    <th className='text-3.5  text-center'>Tên sản phẩm</th>
                                    <th className='text-3.5  text-center'>Số lượng</th>
                                    <th className='text-3.5  text-center'>Giá</th>
                                    <th className='text-3.5  text-center'>Tổng (Số lượng x giá)</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr className='bg-slate-50 hover:bg-slate-100'>
                                    <td className='text-3.5 p-2 text-center'>1</td>
                                    <td className='text-3.5 p-2 text-center'>Điện thoại Nokia</td>
                                    <td className='text-3.5 p-2 text-center'>2</td>
                                    <td className='text-3.5 p-2 text-center'>20000đ</td>
                                    <td className='text-3.5 p-2 text-center'>50000000đ</td>

                                </tr>
                                <tr className='bg-slate-50 hover:bg-slate-100'>
                                    <td className='text-3.5 p-2 text-center'>2</td>
                                    <td className='text-3.5 p-2  text-center'>Điện thoại samsung</td>
                                    <td className='text-3.5 p-2  text-center'>10</td>
                                    <td className='text-3.5 p-2  text-center'>25000đ</td>
                                    <td className='text-3.5 p-2  text-center'>25000000đ</td>
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