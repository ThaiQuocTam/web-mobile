import React, { useState } from 'react'

const ShowReviewProduct = () => {

    const [hideResponse, setHideResponse] = useState(false)

    return (
        <>
            <div className='w-full border border-gray-200 bg-white rounded-2 mt-5 px-5 pb-5 '>
                <div
                    onMouseEnter={() => setHideResponse(true)}
                    className='border-b border-gray-400 pb-5 mt-5'>
                    <div>
                        <i class="bi bi-person-circle text-gray-500 text-5 mr-2"></i>
                        <span className='text-3.5 font-semibold mr-5'>Thái Quốc Tâm</span>
                        <span className='text-3 text-gray-500'>12-10-2022 - 20:30:52</span>
                    </div>
                    <div className='ml-8'>
                        <span className='text-3.2 text-gray-800'>Sản phẩm rất chi là tuyệt vời, sẽ tuyệt vời nếu nó free</span>
                    </div>
                    {
                        hideResponse && <div className='pl-5'>
                            <form>
                                <input
                                    type='text'
                                    placeholder='Nhập bình luận của bạn...'
                                    className='outline-none mr-2 border mt-2 w-90 bg border-slate-200 p-1 placeholder:text-3 text-3 text-gray-600 pl-5 rounded-5'
                                />
                                <button className='rounded-5 px-2 py-1 bg-slate-500 text-white text-3 hover:bg-slate-700'><i class="bi bi-send-fill mr-2 "></i>Bình luận</button>

                            </form>
                        </div>
                    }
                    <div className='ml-8 pl-2 mt-2 border-l border-slate-500'>
                        <div>
                            <i class="bi bi-person-circle text-green-950 text-5 mr-2"></i>
                            <span className='text-3 font-semibold mr-1'>Nguyễn Trung Nghĩa</span>
                            <span className='text-2.5 text-green-500 font-semibold mr-5'><i class="bi bi-check-circle-fill text-3 text-green-600 mr-1"></i>QTV</span>
                            <span className='text-3 text-gray-500'>12-10-2022 - 20:30:52</span>
                        </div>
                        <div className='ml-8'>
                            <span className='text-3.2 text-gray-800'>Cảm ơn bạn đã phản hồi, chúng tôi rất sẵn lòng </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShowReviewProduct