import { useEffect, useState } from 'react'
import * as actions from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { infoProductDetailSelector } from 'redux/selector/selector'

const ProductDetail = () => {

    const infoProductDetail = useSelector(infoProductDetailSelector)
    const dispatch = useDispatch()

    const [stateInfoProductDetail, setStateInfoProductDetail] = useState()

    const id_Product = localStorage.getItem('Id_Product_Detail')

    useEffect(() => {
        try {
            if (id_Product) {
                dispatch(actions.getInfoProductDetailAction.getInfoProductDetailRequest(id_Product))
            }
        } catch (e) {
            console.log(e);
        }
    }, [id_Product])

    useEffect(() => {
        setStateInfoProductDetail(infoProductDetail)
    }, [infoProductDetail])

    return (
        <>
            <div className='font-bold text-3xl pb-3 border-b border-slate-200 mb-5'>Thông số sản phẩm</div>
            <div className='p-5 border border-slate-400 rounded-4'>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Công nghệ màn hình</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Độ phân giải</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Hệ điều hành</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Chíp xử lý</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Bộ nhớ ROM</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>RAM</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Dung lượng pin</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
                <div className='flex my-5'>
                    <div className='w-40pc'>
                        <span className='text-4 font-semibold text-gray-800'>Hình ảnh</span>
                    </div>
                    <div className='w-60pc'>
                        <span className='text-4 text-gray-800'>{stateInfoProductDetail ? stateInfoProductDetail.Cong_nghe_man_hinh : ''}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail