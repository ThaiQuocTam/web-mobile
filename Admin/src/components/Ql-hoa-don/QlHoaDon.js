import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const QlHoaDon = () => {
    //const [showDetailOder, setShowDetailOder] = useState(false)
    const [stateInfoOder, setInfoOder] = useState([])
    const [stateStatus, setStateStatus] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:7001/api/get-info-oder`)
            .then(listInfoOder => listInfoOder.data.length !== 0 ? setInfoOder(listInfoOder.data) : '')
            .catch(e => console.log(e))

        axios.get(`http://localhost:7001/api/get-status-order`)
            .then(listInfoStatusOrder => listInfoStatusOrder.data.length !== 0 ? setStateStatus(listInfoStatusOrder.data) : '')
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <div className='font-bold text-3xl text-gray-700 pb-3 border-b border-slate-200'>Danh sách hóa đơn</div>
            <div className='w-full mt-4'>
                <div className='inline-block relative'>
                    <input
                        className='border focus:outline-none border-green-700 text-3.5 hover:border-green-900 focus:border placeholder:text-3 placeholder:text-slate-500 focus:border-green-900 rounded-5 h-10 w-96 mr-3 px-5' type={'text'} placeholder='Nhập hóa đơn cần tìm...' />
                    <a className='inline-block h-10 leading-10' href='#'><i className="bi bi-search text-gray-600 h-10 inline-block hover:text-black text-5 cursor-pointer leading-10"></i></a>
                </div>
            </div>
            <div className="flex flex-col mt-10">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className=" inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="w-full">
                                <thead className=" border-b">
                                    <tr>
                                        <th scope="col" className="text-sm  bg-gray-400 font-semibold py-2 px-2 text-4 text-black  text-center">
                                            STT
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Tên người dùng
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Địa chỉ nhận hàng
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Số điện thoại
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Ghi chú
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Tổng tiền
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">
                                            Trạng thái
                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">

                                        </th>
                                        <th scope="col" className="text-sm  bg-gray-400  px-2 font-semibold text-black text-4 text-center">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stateInfoOder ?
                                            stateInfoOder.map((item, index) => (
                                                <>
                                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                        <td className="whitespace-nowrap text-center text-3.5 text-sm font-medium text-gray-900 px-2 py-2">
                                                            {index + 1}
                                                        </td>
                                                        <td className="whitespace-nowrap text-center text-sm text-3.5 font-medium text-gray-900 px-2 py-2">
                                                            {item.Ho_ten}
                                                        </td>
                                                        <td className="text-sm text-gray-900 text-center text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                            {item.Email}
                                                        </td>
                                                        <td className="text-sm text-gray-900 text-center text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                            {item.Dia_chi_nhan_hang}
                                                        </td>
                                                        <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                            {item.So_dien_thoai}
                                                        </td>
                                                        <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                            {item.Ghi_chu}
                                                        </td>
                                                        <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                            {item.Tong_tien.toLocaleString()} ₫
                                                        </td>
                                                        <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                            {stateStatus ? stateStatus.map((itemStatus) => (
                                                                itemStatus.id === item.Trang_thai ? itemStatus.Ten_trang_thai : ''
                                                            )) : ''}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                            <button onClick={() => { localStorage.setItem('idHD', item.id); navigate('/OrderDetail') }} className="px-4 py-1 text-sm text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white hover:border-white border-2 rounded">Xem chi tiết</button>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                            <button className="px-4 py-1 text-sm text-black border-black font-semibold hover:bg-slate-600 hover:text-white hover:border-white border-2 rounded">Xóa</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )) : ''

                                    }


                                    {/* {
                                        stateListProduct.map((item, index) => (
                                            <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td className="whitespace-nowrap text-center text-3.5 text-sm font-medium text-gray-900 px-2 py-2">
                                                    {index + 1}
                                                </td>
                                                <td className="whitespace-nowrap text-center text-sm text-3.5 font-medium text-gray-900 px-2 py-2">
                                                    {item.Ten_san_pham}
                                                </td>
                                                <td className="text-sm text-gray-900 font-light whitespace-nowrap text-center">
                                                    <img className="mx-3 my-2 w-24" src={item.Hinh_anh} />
                                                </td>
                                                <td className="text-sm text-gray-900 text-center text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                    {item.Gia_san_pham.toLocaleString()} ₫
                                                </td>
                                                <td className="text-sm text-gray-900 text-center text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                    {item.So_luong_SP}
                                                </td>
                                                <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                    {
                                                        stateDataProductType.map((item2) => (
                                                            item.Id_loai_SP === item2.id ? item2.Ten_loai_SP : ''
                                                        ))
                                                    }
                                                </td>
                                                <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                    {
                                                        stateDataProductGroup.map((item2) => (
                                                            item.Id_nhom_SP === item2.id ? item2.Ten_nhom : ''
                                                        ))
                                                    }
                                                </td>
                                                <td className="text-sm text-center text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap">
                                                    {item.Thong_tin_bao_hanh}
                                                </td>
                                                <td className="text-sm text-gray-900 text-3.5 font-light px-2 py-2 whitespace-nowrap text-center">
                                                    {item.Ghi_chu}
                                                </td>
                                                {
                                                    stateListProductDetail ?
                                                        stateListProductDetail.some((itemProductDetail) => itemProductDetail.Id_san_pham === item.id) ?
                                                            <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                                <Link onClick={() => localStorage.setItem('Id_Product_Detail', item.id)} to="/ProductDetail" className="px-4 py-1 text-sm text-blue-500 border-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:border-white border-2 rounded">Xem thông Số</Link>
                                                            </td> :
                                                            <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                                <button onClick={() => { setShowModalAddProductDetail(true); localStorage.setItem('id_add_product', item.id); }} className="px-4 py-1 text-sm text-gray-700 border-gray-700 font-semibold hover:bg-gray-700 hover:text-white hover:border-white border-2 rounded">Thêm thông số sản phẩm</button>
                                                            </td>
                                                        // stateListProductDetail ?
                                                        //     stateListProductDetail.filter((itemProductDetail) => itemProductDetail.Id_san_pham === item.id) ?
                                                        //         <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                        //             <Link onClick={() => localStorage.setItem('Id_Product_Detail', item.id)} to="/ProductDetail" className="px-4 py-1 text-sm text-blue-500 border-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:border-white border-2 rounded">Xem thông Số</Link>
                                                        //         </td> :
                                                        //         <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                        //             <button onClick={() => { setShowModalAddProductDetail(true); localStorage.setItem('id_add_product', item.id); }} className="px-4 py-1 text-sm text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white hover:border-white border-2 rounded">Thêm thông số sản phẩm đã có ròi</button>
                                                        //         </td>

                                                        // stateListProductDetail.map((itemProductDetail) => (
                                                        //     (itemProductDetail.Id_san_pham === item.id) ?
                                                        //         <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                        //             <Link onClick={() => localStorage.setItem('Id_Product_Detail', item.id)} to="/ProductDetail" className="px-4 py-1 text-sm text-blue-500 border-blue-500 font-semibold hover:bg-blue-500 hover:text-white hover:border-white border-2 rounded">Xem thông Số</Link>
                                                        //         </td> : ''

                                                        // ))
                                                        // (itemProductDetail.Id_san_pham !== item.id) ?
                                                        // <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                        //     <button onClick={() => { setShowModalAddProductDetail(true); localStorage.setItem('id_add_product', item.id); }} className="px-4 py-1 text-sm text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white hover:border-white border-2 rounded">Thêm thông số sản phẩm đã có ròi</button>
                                                        // </td> : ''
                                                        : <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                            <button onClick={() => { setShowModalAddProductDetail(true); localStorage.setItem('id_add_product', item.id); }} className="px-4 py-1 text-sm text-red-500 border-red-500 font-semibold hover:bg-red-500 hover:text-white hover:border-white border-2 rounded">Thêm thông số sản phẩm chưa có</button>
                                                        </td>
                                                }
                                                <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                    <button onClick={() => { dispatch(actions.getInfoProductAction.getInfoProductRequest(item.id)); setShowModalEditInfoProduct(true) }} className="px-4 py-1 text-sm text-black border-black font-semibold hover:bg-slate-600 hover:text-white hover:border-white border-2 rounded">Sửa</button>
                                                </td>

                                            </tr>
                                        ))
                                    } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                showModalAddProduct &&
                <div className='fixed flex z-sticky  items-center bg-slate-250 justify-center left-0 top-0 right-0 bottom-0'>
                    <ModalThemSP isClose={hideModalAddProduct} />
                </div>
            }
            {
                showModalEditInfoProduct &&
                <div className='fixed flex z-sticky items-center bg-slate-250 justify-center left-0 top-0 right-0 bottom-0'>
                    <EditInfoProduct isClose={hideModalEditInfoProduct} />
                </div>
            }
            {
                showModalAddProductDetail &&
                <div className='fixed flex z-sticky  items-center bg-slate-250 justify-center left-0 top-0 right-0 bottom-0'>
                    <ModalAddProductDetail isClose={handleHideModalAddProductDetail} />
                </div>
            } */}
        </>
    )
}

export default QlHoaDon