import BackHome from "components/Trang-chu/BackHome"
import FlashSale from "components/Trang-chu/FlashSale"
import { Products } from "models/DetailProduct.model"
import { useEffect, useState } from "react"
import { infoProductSelector } from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'
import { Link } from "react-router-dom"

const DetailProduct = () => {

  const dispatch = useDispatch()

  const [index, setIndex] = useState(0)
  const [animation, setAnimation] = useState('')
  const infoProduct = useSelector(infoProductSelector)
  const [stateInfoProduct, setStateInfoProduct] = useState({
    Ten_san_pham: '',
    Gia_san_pham: '',
    Thong_tin_khuyen_mai: '',
    Hinh_anh: ''
  })

  const product = Products.map(items => items.images.length)
  const idProductStore = localStorage.getItem('idProduct')

  const handlePre = () => {
    if (index <= 0) {
      setIndex(product - 1)
      animation === 'animate-aniLeft1' ? setAnimation('animate-aniLeft2') : setAnimation('animate-aniLeft1')
    }
    else {
      setIndex(pre => pre - 1)
      animation === 'animate-aniLeft1' ? setAnimation('animate-aniLeft2') : setAnimation('animate-aniLeft1')
    }
  }

  const handleNext = () => {
    if (index >= product - 1) {
      setIndex(0)
      animation === 'animate-aniRight1' ? setAnimation('animate-aniRight2') : setAnimation('animate-aniRight1')
    }
    else {
      setIndex(pre => pre + 1)
      animation === 'animate-aniRight1' ? setAnimation('animate-aniRight2') : setAnimation('animate-aniRight1')
    }
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (index >= product - 1) {
        setIndex(0)
        animation === 'animate-aniRight1' ? setAnimation('animate-aniRight2') : setAnimation('animate-aniRight1')
      }
      else {
        setIndex(pre => pre + 1)
        animation === 'animate-aniRight1' ? setAnimation('animate-aniRight2') : setAnimation('animate-aniRight1')
      }
    }, 3000);

    return () => clearTimeout(timerId)
  }, [index])

  useEffect(() => {
    try {
      if (idProductStore) {
        dispatch(actions.getInfoProductAction.getInfoProductRequest(idProductStore))
      }
    } catch (e) {

    }
  }, [idProductStore])

  useEffect(() => {
    try {
      if (infoProduct) {
        setStateInfoProduct({
          ...stateInfoProduct,
          Ten_san_pham: infoProduct.data.Ten_san_pham,
          Gia_san_pham: infoProduct.data.Gia_san_pham,
          Thong_tin_bao_hanh: infoProduct.data.Thong_tin_bao_hanh,
          Hinh_anh: infoProduct.data.Hinh_anh
        })
      } else {
      }
    } catch (e) {

    }
  }, [infoProduct])

  // console.log(localStorage.getItem('idProduct'));


  return (
    <>
      <div>
        <div className='overflow-auto w-full pl-32'>
          <Link className="relative float-left leading-9 h-9 mb-5 block text-green-900 hover:text-green-600" to="/ListSmartphone">
            <i className="bi bi-arrow-left-circle icon text-8  mr-2 " />
            <strong className='text-4  '>Quay lại</strong>
          </Link  >
        </div>
      </div>
      <div className='mx-34'>
        <div className='w-full'>
          <span className='text-5 font-extrabold '>{stateInfoProduct.Ten_san_pham} - Chính hãng</span>
        </div>
        <div className="flex w-full">
          <div className='w-1/2'>
            <div className=' w-full overflow-hidden pl-20'>
              <div className="slider max-w-90 float-left">
                <i onClick={handlePre} className="bi bi-caret-left-fill ml-28 h-7 w-7 slider-prev border-2 border-gray-200 hover:bg-slate-100 text-4"></i>
                {/* <ul className="slider-dots" >
                  <li className="slider-dot-item"></li>
                </ul> */}
                <div className="slider-wrapper">
                  <div className="slider-main w-96 p-5  border-slate-100 shadow-soft-3D">
                    {/* <div className={animation} style={{ width: '100%' }}> */}
                    <div className="slider-item">
                      <img
                        className="block max-w-full"
                        src={stateInfoProduct.Hinh_anh}
                        alt=""
                      />
                    </div>
                    {/* </div> */}
                  </div>
                </div>
                <i onClick={handleNext} className="bi bi-caret-right-fill h-7 mr-28 w-7 text-4 slider-next border-2 border-gray-200 hover:bg-slate-100"></i>
              </div>
            </div>
          </div>
          <div className="w-1/2 pt-8">
            <div className="flex p-5">
              <div><span className="text-5 text-red-600 font-extrabold mr-5 ml-5">{stateInfoProduct.Gia_san_pham.toLocaleString()} ₫</span></div>
              <div className="leading-9"><span className="text-3.5 line-through italic pr-5 border-r border-r-black">{(stateInfoProduct.Gia_san_pham + (stateInfoProduct.Gia_san_pham * (10 / 100))).toLocaleString()} ₫</span></div>
              <div className="pl-5 leading-9"><span className="italic text-3.5 font-normal">Giá đã bao gồm 10% VAT</span></div>
            </div>
            <div className="pl-10">
              <span className="text-4 font-semibold">{stateInfoProduct.Ten_san_pham} - Chính hãng</span>
            </div>
            <div className="pl-10 mt-2">
              <div className="bg-green-950 pt-1 w-full text-center rounded-3">
                <i className="bi bi-truck-front-fill text-5 text-white"></i>
                <span className="text-white ml-3 mb-2 text-3.5">MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</span>
              </div>
            </div>
            <div className="pl-10 mt-5">
              <div className="mb-2">
                <span className="text-3.5 font-bold">THÔNG TIN BẢO HÀNH </span>
              </div>
              <div>
                <span className="w-full border borer-slate-100 block rounded-3 h-24 p-3 focus:outline-none">{stateInfoProduct.Thong_tin_bao_hanh}</span>
              </div>
            </div>
            <div className="flex pl-10 mt-7">
              <div className="w-2/3 bg-red-600 hover:bg-red-800 text-center py-1 rounded-3 cursor-pointer  ">
                <button className="text-white text-3 font-bold">MUA NGAY</button>
              </div>
              <div className="w-1/3 pl-2">
                <div className="bg-yellow-600 rounded-3 text-center cursor-pointer hover:bg-yellow-800">
                  <i class="bi bi-cart-plus-fill text-6 text-white"></i>
                  <button className=" ml-2 text-3 text-white font-bold">THÊM GIỎ HÀNG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mx-34 my-3 border border-slate-50 bg-slate-50 rounded-2">
        <div className="w-1/2 p-5">
          <div className="w-full">
            <img className="w-full rounded-2" src="https://cdn.hoanghamobile.com/i/content/Uploads/2022/04/15/galaxy-a73.jpg" />
          </div>
        </div>
        <div className="w-/2 p-5">
          <div>
            <span className="font-bold text-4">THÔNG SỐ KĨ THUẬT</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">Công nghệ màn hình : &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">Độ phân giải: &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">Hệ điều hành : &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">Chíp xử lý (CPU) : &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">Bộ nhớ ROM : &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">RAM : &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
          <div className="my-2">
            <label className="font-bold text-3.5">Dung lượng pin : &nbsp;&nbsp;</label>
            <span className="text-3.5">Super AMOLED Plus</span>
          </div>
        </div>
      </div>

      <div className="">
        <div className='pl-24 mt-8 mb-5'>
          <div className='bg-green-950 max-w-54 p-1 pl-5 border-l-25 border-green-200 rounded-1'>
            <span className='text-4 font-semibold text-white'>GỢI Ý CHO BẠN</span>
          </div>
        </div>
        <div>
          <FlashSale />
        </div>
      </div>
    </>
  )
}

export default DetailProduct