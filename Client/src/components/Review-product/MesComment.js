import React from 'react'
import { Link } from 'react-router-dom'

const MesComment = (props) => {
    return (
        <>
            <div>
                <div className={`rounded-2 p-2 bg-red-500 fixed top-120 animate-modalForm`} style={{ left: '640px' }}>
                    <div className='w-full overflow-hidden'>
                        <div className='float-right'>
                            <i onClick={props.isClose} className=" bi bi-x-octagon-fill hover:text-slate-700 cursor-pointer text-white text-4 mr-2"></i>
                        </div>
                        <div className='mt-2 pl-5 flex'>
                            <div>
                                <i className={` text-8 text-white`} ></i>
                            </div>
                            <Link to='/SignIn'>
                                <div className='leading-12 pl-2'>
                                    <span className='text-3.5 font-semibold text-white'>Vui lòng đăng nhập</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MesComment