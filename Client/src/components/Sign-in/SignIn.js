import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { signInSelector } from 'redux/selector';
import { useForm } from 'react-hook-form';

const SignIn = () => {

    const signData = useSelector(signInSelector)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [hidePass, setHidePass] = useState(true)
    const [message, setMessage] = useState('')

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
                localStorage.setItem('Quyen', signData.user.Id_phan_quyen)
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
            <div className="flex justify-center pr-56">
                <div className="w-1/4 mr-3 image">
                </div>
                <div className="w-1/3 mt-10 p-3 bg-white">
                    <form onSubmit={handleSubmit(dataSubmit)} className="border border-gray-500 rounded-[12px]">
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-500 text-center font-medium text-5"> Đăng nhập</h1>
                            <div className="mt-4">
                                <label>Email</label>
                                <input
                                    {...register('Email', { required: true })}
                                    type="text"
                                    pattern="[A-Za-z]{1-15}"
                                    placeholder="Nhập Email"
                                    className="mt-1 p-2 pr-12 bg-gray-200 focus:outline-none rounded border border-gray-400 w-full"
                                />
                                {
                                    errors.Email &&
                                    <div className='mt-3'>
                                        <p className='text-3 italic text-red-500'>Không được để trống</p>
                                    </div>
                                }
                            </div>
                            <div className="mt-4">
                                <label>Mật khẩu</label>
                                <input
                                    {...register('Mat_khau', { required: true })}
                                    type={hidePass ? 'password' : 'text'}
                                    placeholder="Nhập mật khẩu"
                                    className="mt-1 p-2 pr-12 bg-gray-200 focus:outline-none rounded border border-gray-400 w-full"
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
                            <div className='flex'>
                                <div className="mt-4 w-1/2">
                                    <input
                                        type="submit"
                                        value="Đăng nhập"
                                        className="mt-1 p-2 hover:bg-purple-800 border w-28 border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                    />
                                </div>

                                <div className="mt-4 w-1/2">
                                    <a href='/SignUp'>
                                        <input
                                            value="Đăng ký"
                                            className="mt-1 hover:bg-purple-800 w-28 p-2 float-right border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignIn