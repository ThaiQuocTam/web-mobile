import React from "react";
import { Link, useNavigate } from "react-router-dom"
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const ShowButton = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/DetailProduct')
        dispatch(actions.getInfoProductAction.getInfoProductRequest(props.Id))
    }
    return (
        <>
            <Link to='/DetailProduct' onClick={handleOnClick}>
                <div className='bg-red-600 text-center p-1 rounded-1 shadow-soft-2xl hover:bg-red-800 animate-modalForm'>
                    <div>
                        <Link className='text-3.5 font-semibold text-white'>Xem chi tiết</Link>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default ShowButton