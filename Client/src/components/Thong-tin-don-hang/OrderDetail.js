import BackHome from 'components/Trang-chu/BackHome'
import React from 'react'

const OrderDetail = () => {
    return (
        <>
            <div>
                <BackHome />
            </div>
            <div >
                <div class="flex flex-col mx-auto w-10/12">
                    <div className="mt-4">
                        <h2 className='text-center font-medium text-black'>THÔNG TIN ĐƠN HÀNG </h2>
                    </div>
                    <div className="mt-4">
                        <label>Thông tin người đặt hàng</label>
                        <div class="border-2 border-slate-900 w-full" >
                            <div class="divide-y divide-dashed">
                                <div>
                                    <label>Họ và tên: </label>
                                    <label className='text-right'> Nguyễn Trung Nghĩa</label>
                                </div>

                                <div>
                                    <label>Số điện thoại: </label>
                                    <label>0388339515</label>
                                </div>

                                <div>
                                    <label>Email: </label>
                                    <label>NN@gmail.com</label>
                                </div>

                                <div>
                                    <label>Địa chỉ: </label>
                                    <label>48 Biên Cương</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='mt-10'>
                        <label>Danh sách sản phẩm</label>
                        <table class=" border-separate border-spacing-2 border border-slate-900 w-full ">
                            <thead>
                                <tr>
                                    <th className='border border-slate-900 text-center'>#</th>
                                    <th className='border border-slate-900 text-center'>Tên sản phẩm</th>
                                    <th className='border border-slate-900 text-center'>Số lượng</th>
                                    <th className='border border-slate-900 text-center'>GIÁ</th>
                                    <th className='border border-slate-900 text-center'>TỔNG (Số lượng & giá)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border border-slate-900 text-center'>1</td>
                                    <td className='border border-slate-900 text-center'>Điện thoại Nokia</td>
                                    <td className='border border-slate-900 text-center'>2</td>
                                    <td className='border border-slate-900 text-center'>20000đ</td>
                                    <td className='border border-slate-900 text-center'>50000000đ</td>

                                </tr>
                                <tr>
                                    <td className='border border-slate-900 text-center'>2</td>
                                    <td className='border border-slate-900 text-center'>Điện thoại samsung</td>
                                    <td className='border border-slate-900 text-center'>10</td>
                                    <td className='border border-slate-900 text-center'>25000đ</td>
                                    <td className='border border-slate-900 text-center'>25000000đ</td>
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