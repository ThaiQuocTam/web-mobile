import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { signInSelector } from 'redux/selector';
import { useForm } from 'react-hook-form';
import imageSignIn from '../../Assets/images/dki.png'
import SignUp from 'components/Sign-up/SignUp';

const SignIn = (props) => {

    const signData = useSelector(signInSelector)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [hidePass, setHidePass] = useState(true)
    const [message, setMessage] = useState('')
    const [showModalSignUp, setShowModalSignUp] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const handleShowPass = () => {
        setHidePass(() => !hidePass)
    }

    useEffect(() => {
        try {
            if (signData.errCode !== 0) {
                setMessage(signData.message)
            }
            if (signData.errCode === 0) {
                navigate('/')
                localStorage.setItem("User", signData.user.Email)
            }
        }
        catch (e) {
        }
    }, [signData])

    const dataSubmit = (data) => {
        dispatch(actions.signInAction.signInRequest(data))
    }

    return (
        <>
            <div className="flex items-center bg-slate-50 w-70pc h-70pc rounded-5 relative animate-modalForm">
                <div className="mr-3 bg-blue-100 h-full rounded-5 pt-20 px-8">
                    <img className='w-full' src={imageSignIn} />
                </div>
                <div className="p-3 w-60pc px-16 justify-center">
                    <i onClick={props.isClose} className='bi bi-dash-circle-fill absolute top-2 right-2 text-6 hover:text-red-600 cursor-pointer mr-2 text-red-500 float-right'></i>
                    <form onSubmit={handleSubmit(dataSubmit)} className=" rounded-[12px]">
                        <div className="">
                            {
                                props.mes ?
                                    <h1 className="text-red text-center text-4"> {props.mes}</h1>

                                    :
                                    <h1 className="text-black text-center font-semibold text-9"> Đăng nhập</h1>
                            }
                            <div className="mt-4">
                                <label className='font-semibold text-4'>Email</label>
                                <input
                                    {...register('Email', { required: true })}
                                    type="text"
                                    pattern="[A-Za-z]{1-15}"
                                    className="mt-1 p-2 pr-12 text-3.5 bg-gray-400 focus:outline-none rounded border border-gray-400 w-full"
                                />
                                {
                                    errors.Email &&
                                    <div className='mt-3'>
                                        <p className='text-3 italic text-red-500'>Không được để trống</p>
                                    </div>
                                }
                            </div>
                            <div className="mt-4">
                                <label className='text-4 font-semibold'>Mật khẩu</label>
                                <input
                                    {...register('Mat_khau', { required: true })}
                                    type={hidePass ? 'password' : 'text'}
                                    className="mt-1 p-2 pr-12 bg-gray-400 focus:outline-none rounded border border-gray-400 w-full"
                                />
                                {
                                    hidePass ? <span className='relative right-4 float-right top-17px cursor-pointer' onClick={handleShowPass}><i class="bi bi-eye-slash-fill"></i></span> : <span className='relative right-4 float-right top-17px cursor-pointer line-through' onClick={handleShowPass}><i class="bi bi-eye-fill"></i></span>
                                }
                                {
                                    errors.Mat_khau &&
                                    <div className='mt-3'>
                                        <p className='text-3 italic text-red-500'>Không được để trống</p>
                                    </div>
                                }
                            </div>
                            <div className='mt-3'>
                                <p className='text-3.5 text-red-500'>{message}</p>
                            </div>
                            <div className=''>
                                <div className="w-full">
                                    <input
                                        type="submit"
                                        value="ĐĂNG NHẬP"
                                        className="mt-1 p-2 hover:opacity-90 border w-full  border-gray-400 rounded cursor-pointer bg-green-950 text-white"
                                    />
                                </div>

                                <div onClick={() => { setShowModalSignUp(true) }} className="w-full">
                                    <input
                                        type="submit"
                                        value="ĐĂNG KÍ"
                                        className="mt-2 p-2  border-2  hover:border-green-500 font-semibold w-full border-green-950 rounded cursor-pointer  text-black"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {
                <div>
                    {showModalSignUp && <div className='fixed flex z-sticky items-center bg-slate-900 justify-center left-0 top-0 right-0 bottom-0'>
                        <SignUp />
                    </div>}
                </div>
            }

        </>
    )
}

export default SignIn