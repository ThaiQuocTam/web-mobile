import React from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css';
const SignIn = () => {
    return (
        <>
            <div className=''>

                <h1>SignIn</h1>
                <div className="flex">
                    <div className="w-1/4 mr-3 image">
                    </div>
                    <div className="w-1/3 mt-10 p-3 bg-white">
                        <form className="border border-gray-500 rounded-[12px]">
                            <div className="p-4">
                                <h1 className="text-lg border-b border-gray-500"> Đăng nhập</h1>
                                <div className="mt-4">
                                    <label className='text-red'>Tài khoản</label>
                                    <input
                                        type="text"
                                        name="tentaikhoan"
                                        placeholder="Tên tài khoản"
                                        className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label>Mật khẩu</label>
                                    <input
                                        type="password"
                                        name="password"

                                        placeholder="Mật khẩu"
                                        className="mt-1 p-2 bg-gray-200 rounded border border-gray-400 w-full"
                                    />
                                </div>

                                <div className="">
                                    <input

                                        type="submit"
                                        value="Đăng nhập"
                                        className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Link to='/SignUp'>
                                        <input
                                            type="submit"
                                            value="Đăng ký"
                                            className="mt-1 p-2 border border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn