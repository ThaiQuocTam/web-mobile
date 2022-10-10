import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css';
const SignIn = () => {

    const [hidePass, setHidePass] = useState(true)

    const handleShowPass = () => {
        setHidePass(() => !hidePass)
    }

    return (
        <>
            <div className="flex justify-center pr-56">
                <div className="w-1/4 mr-3 image">
                </div>
                <div className="w-1/3 mt-10 p-3 bg-white">
                    <form className="border border-gray-500 rounded-[12px]">
                        <div className="p-4">
                            <h1 className="text-lg border-b border-gray-500 text-center font-medium text-5"> Đăng nhập</h1>
                            <div className="mt-4">
                                <label>Tài khoản</label>
                                <input
                                    type="text"
                                    name="tentaikhoan"
                                    placeholder="Tên tài khoản"
                                    className="mt-1 p-2 pr-12 bg-gray-200 focus:outline-none rounded border border-gray-400 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <label>Mật khẩu</label>
                                <input
                                    type={hidePass ? 'password' : 'text'}
                                    name="password"
                                    placeholder="Mật khẩu"
                                    className="mt-1 p-2 pr-12 bg-gray-200 focus:outline-none rounded border border-gray-400 w-full"
                                />
                                {
                                    hidePass ? <span className='relative right-4 float-right top-17px cursor-pointer' onClick={handleShowPass}><i class="bi bi-eye-slash-fill"></i></span> : <span className='relative right-4 float-right top-17px cursor-pointer line-through' onClick={handleShowPass}><i class="bi bi-eye-fill"></i></span>
                                }

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
                                    <Link to='/SignUp'>
                                        <input
                                            type="submit"
                                            value="Đăng ký"
                                            className="mt-1 hover:bg-purple-800 w-28 p-2 float-right border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                        />
                                    </Link>
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