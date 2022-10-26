import React from "react";
import { Link, useNavigate } from "react-router-dom"
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const ShowButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/DetailProduct')
        dispatch(actions.getInfoProductAction.getInfoProductRequest(3))
    }
    return (
        <>
            <div className='bg-red-600 text-center p-1 rounded-1 shadow-soft-2xl hover:bg-red-800 animate-modalForm'>
                <Link to='#'>
                    <div>
                        <Link to='/DetailProduct' onClick={handleOnClick} className='text-3.5 font-semibold text-white'>Xem chi tiết</Link>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ShowButton