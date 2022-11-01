import React, { useState, useEffect } from 'react'
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { listReviewUserSelector, listReviewAdminSelector, mesPostReviewSelector } from '../../redux/selector'


const ShowReviewProduct = (props) => {

    const dispatch = useDispatch()
    const listInfoReviewUser = useSelector(listReviewUserSelector)
    const listInfoReviewAdmin = useSelector(listReviewAdminSelector)
    const mesPostReview = useSelector(mesPostReviewSelector)
    const idProduct = props.product.id

    const [stateListInfoReviewUser, setStateListInfoReviewUser] = useState([])
    const [stateListInfoReviewAdmin, setStateListInfoReviewAdmin] = useState([])
    const [ID, setID] = useState()

    useEffect(() => {
        if (idProduct) {
            dispatch(actions.getShowReviewUserAction.getShowReviewUserRequest({ id: idProduct, Id_phan_quyen: 6 }))
            dispatch(actions.getShowReviewAdminAction.getShowReviewAdminRequest({ id: idProduct, Id_phan_quyen: 7 }))
        }
    }, [mesPostReview || idProduct])

    useEffect(() => {
        try {
            if (listInfoReviewUser && listInfoReviewUser.errCode !== '1') {
                setStateListInfoReviewUser(listInfoReviewUser)
            }
            if (listInfoReviewAdmin && listInfoReviewAdmin.errCode !== '1') {
                setStateListInfoReviewAdmin(listInfoReviewAdmin)
            }

        } catch (e) { }
    }, [listInfoReviewUser && listInfoReviewAdmin])

    return (
        <>
            <div className='w-full border border-gray-200 bg-white rounded-2 mt-5 px-5 pb-5 '>
                {
                    stateListInfoReviewUser ?
                        stateListInfoReviewUser.map((item) => (
                            <div
                                onMouseEnter={() => { setID(item.id) }}
                                className='border-b border-gray-400 pb-5 mt-5'>
                                <div>
                                    <i class="bi bi-person-circle text-gray-500 text-5 mr-2"></i>
                                    <span className='text-3.5 font-semibold mr-5'>{item.Ten_nguoi_dung || ''}</span>
                                    <span className='text-3 text-gray-500'>{item.createdAt || ''}</span>
                                </div>
                                <div className='ml-8'>
                                    <span className='text-3.2 text-gray-800'>{item.Noi_dung || ''}</span>
                                </div>
                                {
                                    (ID === item.id) ? <div className='pl-5'>
                                        <form>
                                            <input
                                                type='text'
                                                placeholder='Nhập bình luận của bạn...'
                                                className='outline-none mr-2 border mt-2 w-90 bg border-slate-200 p-1 placeholder:text-3 text-3 text-gray-600 pl-5 rounded-5'
                                            />
                                            <button className='rounded-5 px-2 py-1 bg-slate-500 text-white text-3 hover:bg-slate-700'><i class="bi bi-send-fill mr-2 "></i>Bình luận</button>

                                        </form>
                                    </div> : ''
                                }
                                {
                                    stateListInfoReviewAdmin.map((itemAdmin) => (
                                        <div className='ml-8 pl-2 mt-2 border-l border-slate-500'>
                                            <div>
                                                <i class="bi bi-person-circle text-green-950 text-5 mr-2"></i>
                                                <span className='text-3 font-semibold mr-1'>{itemAdmin.Ten_nguoi_dung || ''}</span>
                                                <span className='text-2.5 text-green-500 font-semibold mr-5'><i class="bi bi-check-circle-fill text-3 text-green-600 mr-1"></i>QTV</span>
                                                <span className='text-3 text-gray-500'>{itemAdmin.createdAt || ''}</span>
                                            </div>
                                            <div className='ml-8'>
                                                <span className='text-3.2 text-gray-800'>{itemAdmin.Noi_dung || ''} </span>
                                            </div>
                                        </div>
                                    ))

                                }

                            </div>
                        )) : ''
                }
            </div>
        </>
    )
}

export default ShowReviewProduct