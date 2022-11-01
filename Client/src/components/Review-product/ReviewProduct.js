import React from 'react'
import * as action from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';

const ReviewProduct = (props) => {

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    const dataSubmit = (data) => {
        console.log(data);
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
                        placeholder='Nội dung. Tối thiểu 15 ký tự *'
                        className='w-full h-24 bg-slate-50 rounded-5 placeholder:text-3 text-3.5 p-5 outline-none focus:border focus:border-gray-500'
                        {...register('Noi_dung', { required: true })}
                    />
                    {
                        errors.Noi_dung && <p className='text-3.2 text-red-500 italic inline-block mt-2 ml-2'>Tối thiểu 15 ký tự</p>
                    }
                    <div className='overflow-hidden mt-2'>
                        {/* <button className='w-44 float-right py-2 rounded-5 bg-green-800 text-white text-3.5 hover:bg-green-950' ><i class="bi bi-send-fill mr-2 "></i></button> */}
                    </div>
                </div>
            </form>

        </>
    )
}

export default ReviewProduct