import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {

  const [hidePass, setHidePass] = useState(true)
  const [hideRePass, setHideRePass] = useState(true)

  const handleShowPass = () => {
    setHidePass(() => !hidePass)
  }

  const handleShowRePass = () => {
    setHideRePass(() => !hideRePass)
  }

  return (
    <div className="flex">
      <div className="w-1/4 mr-3 image">
      </div>
      <div className="w-1/3 mt-10 p-3 bg-white">
        <form className="border border-gray-500 rounded-[12px]">
          <div className="p-4">
            <h1 className="text-lg border-b border-gray-500"> Đăng ký tài khoản</h1>
            <div className="mt-4">
              <label>Tên tài khoản</label>
              <input
                type="text"
                name="tentaikhoan"
                placeholder="Tên tài khoản"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Họ tên</label>
              <input
                type="text"
                name="hoten"
                placeholder="Họ tên"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Mật khẩu</label>
              <input
                type={hidePass ? 'password' : 'text'}
                name="password"
                placeholder="Mật khẩu"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
              {
                hidePass ? <span className='relative right-4 float-right top-17px cursor-pointer' onClick={handleShowPass}><i class="bi bi-eye-slash-fill"></i></span> : <span className='relative right-4 float-right top-17px cursor-pointer line-through' onClick={handleShowPass}><i class="bi bi-eye-fill"></i></span>
              }
            </div>
            <div className="mt-4">
              <label>Nhập lại mật khẩu</label>
              <input
                type={hideRePass ? 'password' : 'text'}
                name="password2"
                placeholder="Nhật lại mật khẩu"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
              {
                hideRePass ? <span className='relative right-4 float-right top-17px cursor-pointer' onClick={handleShowRePass}><i class="bi bi-eye-slash-fill"></i></span> : <span className='relative right-4 float-right top-17px cursor-pointer line-through' onClick={handleShowRePass}><i class="bi bi-eye-fill"></i></span>
              }
            </div>
            <div className="mt-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Giới tính</label>

              <select name='gioitinh' className='ml-3 p-2 border-2 rounded border-black-500'>
                <option>Nam</option>
                <option>Nữ</option>

              </select>

            </div>
            <div className="mt-4">
              <label>Số điện thoại</label>
              <input
                type="number"
                name="sdt"
                placeholder="Số điện thoại"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <input
                type="submit"
                value="Đăng ký"
                className="mt-1 p-2 w-full hover:bg-purple-800 border focus:outline-none border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
  
}

export default SignUp