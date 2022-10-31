import BackHome from 'components/Trang-chu/BackHome'
import React, { useEffect, useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { getInfoUserSelector } from '../../redux/selector'

const Cart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const infoUser = useSelector(getInfoUserSelector)

    const [stateEmail, setStateEmail] = useState()
    const [stateInfoUser, setStateInfoUser] = useState({})

    let email = localStorage.getItem("User")

    useEffect(() => {
        setStateEmail(email)
        if (email) {
            dispatch(actions.getInfoUserAction.getInfoUserRequest(email))
        }
    }, [email])

    useEffect(() => {
        try {
            if (infoUser) {
                setStateInfoUser(infoUser)
            }
        } catch (e) {

        }
    }, [infoUser])

    const product = localStorage.getItem('product')
    const [state, setState] = useState({
        product: {
            Ten_san_pham: ''
        }
    })

    const refreshPage = () => {
        navigate(0);
    }

    useEffect(() => {
        if (product) {
            let infoProduct = JSON.parse(product)
            setState({
                ...state,
                product: {
                    ...product,
                    Ten_san_pham: infoProduct.product.Ten_san_pham
                }
            })
            console.log(state);
        }
    }, [product])

    const [stateData, setSateData] = useState({
        Ten_san_pham: '',
        Gia_san_pham: '',
        So_luong: 0
    })

    const products = [
        {
            Ten_san_pham: 'Dien thoai nokia',
            Gia_san_pham: 500000,
            So_luong: 2,
        }
        // {
        //     Ten_san_pham: 'Dien thoai samsung',
        //     Gia_san_pham: 6000000,
        //     So_luong: 3,
        // },
        // {
        //     Ten_san_pham: 'Dien thoai RedMi',
        //     Gia_san_pham: 700000,
        //     So_luong: 4,
        // }
    ]
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const submitData = (data) => {
        console.log(data)
    }

    const handleOnClickPayment = () => {
        dispatch(actions.postPaymentAction.postPaymentRequest({
            order: {
                Ho_ten: 'Thái Quốc Tâm',
                Email: 'thaiquoctam123@gmail.com',
                So_dien_thoai: '0356091734',
                Dia_chi_nhan_hang: 'Quảng Nam',
                Tong_tien: 500000,
                Id_nguoi_dung: 47
            },
            orderDetail: products
        }))
    }

    return (
        <>
            <div>
                <BackHome />
            </div>
            <div>
                <form onSubmit={handleSubmit(submitData)} class="flex flex-row pl-60">
                    <div class="basis-1/2 ">
                        <div class="flex flex-col mt-10 p-3 bg-white">
                            <h2> GIỎ HÀNG</h2>
                            <div>
                                <div className="border border-gray-500 rounded-[12px] mt-4">
                                    <i className="bi bi-backspace-fill float-right hover:text-red-500 " />
                                    {
                                        products.map((item) => (
                                            <div className='flex'>
                                                <img className="mx-2 my-1" src='https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/08/1111.png' />
                                                <div>
                                                    <p className="mt-8 " >Ten san pham : {item.Ten_san_pham}</p>
                                                    <input
                                                        value={item.Ten_san_pham}
                                                        // onChange={() => { setSateData({ ...stateData, Ten_san_pham: item.Ten_san_pham }) }}
                                                        {...register('Gia_san_pham', { required: true })}
                                                    />
                                                    <p
                                                        {...register('Gia_san_pham', { required: true })}
                                                        className="mt-4 ">{item.Gia_san_pham}</p>
                                                    <div className='my-4 text-center flex'>
                                                        <p
                                                            {...register('So_luong', { required: true })}
                                                            className="mt-2 ">{item.So_luong}</p>
                                                        <input className="minus is-form  hover:text-red-500" type="button" onClick="tru()" value="-" />
                                                        <input aria-label="quantity" className="input-qty" max="10" min="1" name="" type="number" value="1" id="textbox" />
                                                        <input className="plus is-form  hover:text-red-500" type="button" onClick="cong()" value="+" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='flex'>
                                    <p className='mt-4 font-bold'>Tổng thanh toán: </p>
                                    <p className='mt-4 mx-2 text-red-600 font-bold'>33.324.000$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="basis-1/3">
                        <div className="mt-14 p-3 bg-white">
                            <h2> Thông tin đặt hàng</h2>
                            <div className="border border-gray-500 rounded-[12px]">
                                <div className="p-4">
                                    <div className="mt-4">
                                        <label>Họ và Tên</label>
                                        <input
                                            value={stateInfoUser.Ho_ten}
                                            readOnly={email ? true : false}
                                            type="text"
                                            name="hovaten"
                                            className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label>Số điện thoại</label>
                                        <input
                                            type="number"
                                            name="sdt"
                                            readOnly={email ? true : false}
                                            value={stateInfoUser.Dien_thoai}
                                            className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label>Địa chỉ nhận hàng</label>
                                        <input
                                            type="text"
                                            name="diachinhanhang"
                                            className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label>Email</label>
                                        <input
                                            value={stateInfoUser.Email}
                                            readOnly={email ? true : false}
                                            type="email"
                                            name="email"
                                            className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label>Ghi chú</label>
                                        <textarea
                                            type="text"
                                            name="ghichu"
                                            className="mt-1 p-2 h-44 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                                        />
                                    </div>
                                    {
                                        stateEmail ?

                                            <Link to='#' onClick={handleOnClickPayment}>
                                                <div className="mt-4">
                                                    <input
                                                        value="Xác nhận đặt hàng"
                                                        className="mt-1 p-2 w-full hover:bg-purple-800 border focus:outline-none border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                                    />
                                                </div>
                                            </Link> :
                                            <Link to='/SignIn'>
                                                <div className="mt-4">
                                                    <input
                                                        type="submit"
                                                        value="Vui lòng đăng nhập"
                                                        className="mt-1 p-2 w-full hover:bg-purple-800 border focus:outline-none border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                                    />
                                                </div>
                                            </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Cart
