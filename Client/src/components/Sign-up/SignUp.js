import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { signUpSelector } from 'redux/selector';
import { useForm } from 'react-hook-form';

const SignUp = () => {

  const [hidePass, setHidePass] = useState(true)
  const [hideRePass, setHideRePass] = useState(true)
  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    errCode: '',
    message: ''
  })

  const dispatch = useDispatch()
  const signUpData = useSelector(signUpSelector)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange"
  });

  useEffect(() => {
    try {
      if (signUpData) {
        if (signUpData.errCode === '0') {
          setMessage('Đăng kí thành công')
        }
        else {
          setMessage(signUpData.message)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }, [signUpData])

  const handleShowPass = () => {
    setHidePass(() => !hidePass)
  }

  const handleShowRePass = () => {
    setHideRePass(() => !hideRePass)
  }

  const dataSubmit = (data) => {
    if (data.Mat_khau !== data.Nl_mat_khau) {
      setMessage('Mật khẩu không chính xác')
    }
    else {
      dispatch(actions.signUpAction.signUpRequest(data))
    }
  }
  return (
    <div className="flex">
      <div className="w-1/4 mr-3 image">
      </div>
      <div className="w-1/3 mt-10 p-3 bg-white">
        <form onSubmit={handleSubmit(dataSubmit)} className="border border-gray-500 rounded-[12px]">
          <div className="p-4">
            <h1 className="text-lg border-b border-gray-500"> Đăng ký tài khoản</h1>
            <div className="mt-4">
              <label>Họ tên</label>
              <input
                type="text"
                placeholder="Họ tên"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                {...register('Ho_ten', { required: true })}
              />
              {
                errors.Ho_ten &&
                <div className='mt-3'>
                  <p className='text-3 italic text-red-500'>Không được để trống</p>
                </div>
              }
            </div>
            <div className="mt-4">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                {...register('Email', { required: true })}
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
                type={hidePass ? 'password' : 'text'}
                placeholder="Mật khẩu"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                {...register('Mat_khau', { required: true })}

              />
              {
                errors.Mat_khau &&
                <div className='mt-3'>
                  <p className='text-3 italic text-red-500'>Không được để trống</p>
                </div>
              }
              {
                hidePass ? <span className='relative right-4 float-right top-17px cursor-pointer' onClick={handleShowPass}><i class="bi bi-eye-slash-fill"></i></span> : <span className='relative right-4 float-right top-17px cursor-pointer line-through' onClick={handleShowPass}><i class="bi bi-eye-fill"></i></span>
              }
            </div>
            <div className="mt-4">
              <label>Nhập lại mật khẩu</label>
              <input
                type={hideRePass ? 'password' : 'text'}
                placeholder="Nhật lại mật khẩu"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                {...register('Nl_mat_khau', { required: true })}

              />
              {
                errors.Nl_mat_khau &&
                <div className='mt-3'>
                  <p className='text-3 italic text-red-500'>Không được để trống</p>
                </div>
              }
              {
                hideRePass ? <span className='relative right-4 float-right top-17px cursor-pointer' onClick={handleShowRePass}><i class="bi bi-eye-slash-fill"></i></span> : <span className='relative right-4 float-right top-17px cursor-pointer line-through' onClick={handleShowRePass}><i class="bi bi-eye-fill"></i></span>
              }
            </div>

            <div className="mt-4 flex">
              <label className='w-1/2 leading-10'>Giới tính : </label>

              <select className='ml-3 p-2 border-2 rounded border-black-500 w-1/2 outline-none'
                {...register('Gioi_tinh', { required: true })}

              >
                <option value='1'>Nam</option>
                <option value='0' >Nữ</option>

              </select>
              {
                errors.Gioi_tinh &&
                <div className='mt-3'>
                  <p className='text-3 italic text-red-500'>Không được để trống</p>
                </div>
              }
            </div>
            <div className="mt-4">
              <label>Số điện thoại</label>
              <input
                type="number"
                placeholder="Số điện thoại"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
                {...register('Dien_thoai', { required: true })}

              />
              {
                errors.Dien_thoai &&
                <div className='mt-3'>
                  <p className='text-3 italic text-red-500'>Không được để trống</p>
                </div>
              }
            </div>
            <div className='mt-3'>
              <p className='text-3.5 text-red-500'>{message}</p>
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