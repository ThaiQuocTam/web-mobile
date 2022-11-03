import React, { useEffect, useState } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { getInfoUserSelector } from '../../redux/selector'
import MesComment from './MesComment';


const ReviewProduct = (props) => {

    const dispatch = useDispatch()
    const infoUser = useSelector(getInfoUserSelector)
    let email = localStorage.getItem("User")

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [stateInfoUser, setStateInfoUser] = useState()
    const [hideMesComment, setHideMesComment] = useState(false)

    useEffect(() => {
        try {
            if (email) {
                dispatch(actions.getInfoUserAction.getInfoUserRequest(email))
            }
        } catch (e) { }
    }, [email])

    useEffect(() => {
        try {
            if (infoUser) {
                setStateInfoUser(infoUser)
            }
        } catch (e) {

        }
    }, [infoUser || stateInfoUser])

    const dataSubmit = (data) => {
        if (stateInfoUser) {
            dispatch(actions.postReviewAction.postReviewRequest({
                Ten_nguoi_dung: stateInfoUser.Ho_ten,
                Noi_dung: data.Noi_dung,
                Loai: 1,
                Id_phan_quyen: stateInfoUser.Id_phan_quyen,
                Id_nguoi_dung: stateInfoUser.id,
                Id_review_user: 0,
                Id_san_pham: props.product.id_Product
            }))
            setValue('Noi_dung', '')
        } else {
            setHideMesComment(true)
        }
    }

    const hideMes = () => {
        setHideMesComment(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit(dataSubmit)}>
                <div className=''>
                    <span className='text-5 font-semibold text-gray-800'>{props.product.Ten_san_pham} - Chính hãng</span>
                </div>
                <div className='mt-5'>
                    <textarea
                        type='text'
                        placeholder='Nhập nội dung...'
                        className='w-full h-24 bg-slate-50 rounded-5 placeholder:text-3 text-3.5 p-5 outline-none focus:border focus:border-gray-500'
                        {...register('Noi_dung', { required: true })}
                    />
                    {/* {
                        errors.Noi_dung && <p className='text-3.2 text-red-500 italic inline-block mt-2 ml-2'>vui lòng nhập nội dung</p>
                    } */}
                    <div className='overflow-hidden mt-2'>
                        <button className='w-44 float-right py-2 rounded-5 bg-green-800 text-white text-3.5 hover:bg-green-950' ><i class="bi bi-send-fill mr-2 "></i>Bình luận</button>
                    </div>
                </div>
            </form>
            <div>
                {
                    hideMesComment && <MesComment isClose={hideMes} />
                }
            </div>
        </>
    )
}

export default ReviewProduct