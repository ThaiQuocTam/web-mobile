import React from 'react'

const DetailProduct = () => {
  return (
    <>
      <div className='bg-slate-500 mx-34'>
        <div className='w-1/2'>
          <div className='w-full'>
            <span className='text-5 font-extrabold '>Tên điện thoại</span>
          </div>
        </div>
        <div>
          <div className='w-1/2 h-54'>
            <div className='h-54 w-full overflow-hidden'>
              <div className="slider max-w-52">
                <i className="bi bi-caret-left-fill h-7 w-7 slider-prev border-2 border-gray-200 hover:bg-slate-100 text-4"></i>
                {/* <ul className="slider-dots" >
                  <li className="slider-dot-item"></li>
                </ul> */}
                <div className="slider-wrapper">
                  <div className="slider-main">
                    <div className="slider-item">
                      <img
                        className="block max-w-full"
                        src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/08/thumb-xiaomi-12.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <i className="bi bi-caret-right-fill h-7 w-7 text-4 slider-next border-2 border-gray-200 hover:bg-slate-100"></i>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default DetailProduct