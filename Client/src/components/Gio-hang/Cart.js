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
        },
        {
            Ten_san_pham: 'Dien thoai samsung',
            Gia_san_pham: 6000000,
            So_luong: 3,
        },
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
                    <div class="basis-1/2">
                        <div class="flex flex-col mt-10 p-3 bg-white">
                            <div className='flex items-center justify-center'>
                                <i className='bi bi-check2-circle text-12 mr-2 text-green-900'></i>
                                <span className='text-center text-7 text-green-950 font-semibold'> GIỎ HÀNG</span>
                            </div>
                            <div className='p-10 px-20'>
                                {
                                    products.map((item) => (
                                        <div className="border border-gray-200 rounded-[12px]  shadow-soft-xxs mb-4">
                                            <i class="bi bi-dash-circle-fill text-6 hover:text-red-600 cursor-pointer mr-2 text-red-500 float-right"></i>
                                            <div className=''>
                                                <div className='w-full p-5 text-center'>
                                                    <img className="mx-auto my-1 zoom-image hover:zoom-image-hover" src='https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/08/1111.png' />
                                                </div>
                                                <div className='text-center'>
                                                    <p className="text-3.5 font-semibold" >{item.Ten_san_pham}</p>
                                                    <p className='text-3.5 text-red-500 font-semibold inline-block mr-4'>{item.Gia_san_pham.toLocaleString()}  ₫</p>
                                                    <p className='text-3 text-red-500 inline-block line-through'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}  ₫</p>
                                                    {/* <input
                                                        value={item.Ten_san_pham}
                                                        // onChange={() => { setSateData({ ...stateData, Ten_san_pham: item.Ten_san_pham }) }}
                                                        {...register('Gia_san_pham', { required: true })}
                                                    /> */}
                                                    {/* <p
                                                        {...register('Gia_san_pham', { required: true })}
                                                        className="mt-4 ">{item.Gia_san_pham}</p> */}

                                                    <div className='my-4 text-center'>
                                                        {/* <p
                                                            {...register('So_luong', { required: true })}
                                                            className="mt-2 ">{item.So_luong}</p> */}
                                                        <input className="minus is-form  hover:text-red-500 cursor-pointer" type="button" onClick="tru()" value="-" />
                                                        <input aria-label="quantity" readOnly className="input-qty outline-none" max="10" min="1" name="" type="number" value={item.So_luong} id="textbox" />
                                                        <input className="plus is-form  hover:text-red-500 cursor-pointer" type="button" onClick="cong()" value="+" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                                <div className='flex'>
                                    <p className='mt-4 font-bold'>Tổng thanh toán: </p>
                                    <p className='mt-4 mx-2 text-red-600 font-bold'>33.324.000$</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="basis-1/3">
                        <div className="mt-14 p-3 bg-white">
                            <div className='text-center pt-2'>
                                <span className='text-5 uppercase text-green-950 font-semibold'> Thông tin đặt hàng</span>
                            </div>
                            <div className=" rounded-[12px] mt-8">
                                <div className="p-4">
                                    <div className="mt-4">
                                        <input
                                            placeholder='Họ và tên'
                                            value={stateInfoUser.Ho_ten}
                                            readOnly={email ? true : false}
                                            type="text"
                                            name="hovaten"
                                            className="mt-1 p-2 pl-5 text-3.5 text-gray-800 font-semibold focus:outline-none bg-slate-50 rounded-5 border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <input
                                            placeholder='Số điện thoại'
                                            type="number"
                                            name="sdt"
                                            readOnly={email ? true : false}
                                            value={stateInfoUser.Dien_thoai}
                                            className="mt-1 p-2 pl-5 text-3.5 text-gray-800 font-semibold focus:outline-none bg-slate-50 rounded-5 border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <input
                                            placeholder='Địa chỉ nhận hàng'
                                            type="text"
                                            name="diachinhanhang"
                                            className="mt-1 p-2 pl-5 text-3.5 text-gray-800 font-semibold focus:outline-none bg-slate-50 rounded-5 border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <input
                                            placeholder='Email'
                                            value={stateInfoUser.Email}
                                            readOnly={email ? true : false}
                                            type="email"
                                            name="email"
                                            className="mt-1 p-2 pl-5 text-3.5 text-gray-800 font-semibold focus:outline-none bg-slate-50 rounded-5 border border-gray-400 w-full"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <textarea
                                            placeholder='Ghi chú'
                                            type="text"
                                            name="ghichu"
                                            className="mt-1 p-2 pl-5 text-3.5 text-gray-800 font-medium h-44 focus:outline-none bg-slate-50 rounded-5 border border-gray-400 w-full"
                                        />
                                    </div>
                                    {
                                        stateEmail ?

                                            <Link to='#' onClick={handleOnClickPayment}>
                                                <div className="mt-4">
                                                    <button
                                                        className="mt-1 p-2 text-center w-full hover:bg-green-950 border focus:outline-none rounded-2 cursor-pointer bg-green-800 text-white"
                                                    >Xác nhận đặt hàng</button>
                                                </div>
                                            </Link> :
                                            <Link to='/SignIn'>
                                                <div className="mt-4">
                                                    <button
                                                        className="mt-1 text-center p-2 w-full hover:bg-green-950 border focus:outline-none rounded-2 cursor-pointer bg-green-800 text-white"
                                                    >Vui lòng đăng nhập</button>
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
