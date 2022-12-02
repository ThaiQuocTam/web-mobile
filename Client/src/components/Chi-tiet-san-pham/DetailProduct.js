import FlashSale from "components/Trang-chu/FlashSale"
import { Products } from "models/DetailProduct.model"
import { useEffect, useState } from "react"
import { infoProductSelector, infoProductDetailSelector } from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'
import { Link, useNavigate } from "react-router-dom"
import ReviewProduct from "components/Review-product/ReviewProduct";
import ShowReviewProduct from "components/Review-product/ShowReviewProduct";
import AddCartMes from "./AddCartMes";
import SignIn from "components/Sign-in/SignIn";
import ModalBuyNow from "./ModalBuyNow";

const DetailProduct = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const infoProductDetail = useSelector(infoProductDetailSelector)

  const [index, setIndex] = useState(2)
  const [indexListProduct, setIndexListProduct] = useState(0)
  const [positionX, setPositionX] = useState(0)
  const [hideAddCartMes, setHideAddCartMes] = useState(false)
  const [showModalSignIn, setShowModalSignIn] = useState(false)
  const [modalBuyNow, setModalBuyNow] = useState(false)
  const [animation, setAnimation] = useState('')
  const infoProduct = useSelector(infoProductSelector)
  const [stateInfoProduct, setStateInfoProduct] = useState({
    Ten_san_pham: '',
    Gia_san_pham: '',
    Thong_tin_khuyen_mai: '',
    Hinh_anh: '',
    email: '',
    id_Product: ''
  })
  const [stateProductBuyNow, setStateProductBuyNow] = useState()

  let email = localStorage.getItem("User")
  const idProductStore = localStorage.getItem('idProduct')

  useEffect(() => {

    const timerId = setTimeout(() => {
      let indexX = 0
      Products.map((item, index) => {
        indexX = indexX += 1
      })
      setIndexListProduct(indexX)
      setIndex(pre => pre + 1)
      if (index <= indexX) {
        console.log('index', index);
        console.log(indexX);
        setPositionX(pre => pre - 340)
      }
      else {
        setPositionX(0)
        setIndex(2)
      }
    }, 3000)
    return () => clearTimeout(timerId)
  }, [positionX])

  const handlePre = () => {
    if (positionX !== 0) {
      setIndex(pre => pre - 1)
      setPositionX(pre => pre + 340)
    }
  }

  const handleNext = () => {
    console.log(index);
    if (index <= indexListProduct) {
      setIndex(pre => pre + 1)
      setPositionX(pre => pre - 340)
    }
    else {
      setPositionX(0)
      setIndex(2)
    }
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setHideAddCartMes(false)
    }, 3000)
    return () => clearTimeout(timerId)
  }, [hideAddCartMes])

  useEffect(() => {
    try {
      if (idProductStore) {
        dispatch(actions.getInfoProductAction.getInfoProductRequest(idProductStore))
        dispatch(actions.getInfoProductDetailAction.getInfoProductDetailRequest(idProductStore))
      }
    } catch (e) {
    }
  }, [idProductStore])

  useEffect(() => {
    try {
      if (infoProduct) {
        setStateInfoProduct({
          ...stateInfoProduct,
          id_Product: infoProduct.data.id,
          Ten_san_pham: infoProduct.data.Ten_san_pham,
          Gia_san_pham: infoProduct.data.Gia_san_pham,
          Thong_tin_bao_hanh: infoProduct.data.Thong_tin_bao_hanh,
          Hinh_anh: infoProduct.data.Hinh_anh,
          email: email
        })
      } else {
      }
    } catch (e) {

    }
  }, [infoProduct])

  const addProduct = (product) => {
    let arr
    let storage = localStorage.getItem('arrProduct')
    arr = JSON.parse(storage)
    if (storage && arr.length !== 0) {
      let arrNew = []
      let check = arr.find(item => item.id_Product === product.id_Product)
      if (check) {
        arr.map((item) => {
          if (item.id_Product === product.id_Product) {
            item.So_luong += 1
          }
          arrNew.push(item)
        })
        localStorage.setItem('arrProduct', JSON.stringify([...arrNew]))
      }
      else {
        product.So_luong = 1
        localStorage.setItem('arrProduct', JSON.stringify([...arr, product]))
      }
    }
    else {
      product.So_luong = 1
      localStorage.setItem('arrProduct', JSON.stringify([product]))
    }
  }

  const handleOnclickAddCart = () => {
    setHideAddCartMes(true)
    navigate(`/DetailProduct?Ten_san_pham=${stateInfoProduct.Ten_san_pham}`)
    if (stateInfoProduct) {
      addProduct(stateInfoProduct)
    } else {

    }
  }

  const handleCloseMes = () => {
    setHideAddCartMes(false)
  }

  const handleCloseModal = () => {
    setShowModalSignIn(false)
    navigate(0)
  }

  const handleCloseModalBuyNow = () => {
    setModalBuyNow(false)
  }

  return (
    <>
      <div className="bg-gray-100" style={{ 'padding': '0 70px' }}>
        <div className="bg-white">
          <div className="">
            <div>
              <div className='overflow-auto w-full pl-20 '>
                <Link className="relative float-left leading-9 h-9 mb-5 block text-green-900 hover:text-green-600" to="/ListProduct">
                  <i className="bi bi-arrow-left-circle icon text-8  mr-2 " />
                  <strong className='text-4  '>Quay lại</strong>
                </Link  >
              </div>
            </div>
            <div className='mr-20' style={{ 'margin-left': '4.8rem' }}>
              <div className='w-full border-b-2 border-gray-400 pb-2'>
                <span className='text-5 text-gray-700 font-semibold ' style={{ 'font-family': 'sans-serif' }}>{stateInfoProduct.Ten_san_pham} - Chính hãng</span>
              </div>
              <div className="flex w-full">
                <div className='' style={{ 'width': '32.5%' }}>
                  <div className=' w-full relative overflow-hidden mt-2 border shadow-soft-xxs bg-sky-50 rounded-4'>
                    <div className="slider max-w-90 float-left">
                      <i onClick={handlePre} className="bi bi-caret-left-fill bg-gray-600 text-white inline-block h-11 w-10 absolute left-0 text-center leading-10 slider-prev border-2 border-gray-200 hover:bg-slate-700 text-4"></i>
                      <div className="slider-wrapper" style={{ 'width': '124%' }}>
                        <div className="slider-main w-80 p-5  border-slate-100" style={{ 'transform': `translate(${positionX}px)` }}>
                          {
                            Products.map((item) => (
                              <div className="slider-item w-20" style={{ 'margin-left': '38px', 'margin-right': '20px' }}>
                                <img
                                  className="block w-full"
                                  src={item}
                                  alt=""
                                />
                              </div>
                            ))
                          }

                        </div>
                      </div>
                      <i onClick={handleNext} className="bi bi-caret-right-fill bg-gray-600 text-white h-11 w-10 absolute right-0 mr-28 text-4 slider-next border-2 border-gray-200 hover:bg-slate-700" style={{ 'right': '-188px' }}></i>
                    </div>
                    {/* <div className="absolute bottom-0 bg-white w-full h-20 p-2 pl-5 overflow-hidden">
                      <div className="slider max-w-90 float-left mb-20">
                        <i onClick={handlePre} className="bi bi-caret-left-fill bg-gray-600 text-white inline-block h-11 w-10 absolute left-0 text-center leading-10 slider-prev border-2 border-gray-200 hover:bg-slate-700 text-4"></i>
                        <div className="slider-wrapper" style={{ 'width': '124%' }}>
                          <div className="slider-main w-80 p-5  border-slate-100" style={{ 'transform': `translate(${positionX}px)` }}>
                            {
                              Products.map((item) => (
                                <div className="slider-item w-5" style={{ 'margin-left': '38px', 'margin-right': '20px' }}>
                                  <img
                                    className="block w-full"
                                    src={item}
                                    alt=""
                                  />
                                </div>
                              ))
                            }

                          </div>
                        </div>
                        <i onClick={handleNext} className="bi bi-caret-right-fill bg-gray-600 text-white h-11 w-10 absolute right-0 mr-28 text-4 slider-next border-2 border-gray-200 hover:bg-slate-700" style={{ 'right': '-188px' }}></i>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="w-45pc pt-8 pr-5">
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
                      <span className="text-3.5 uppercase  text-green-950" style={{ 'font-family': 'sans-serif' }}><i className='bi bi-check2-circle text-7 font-semibold text-green-950 mr-1 '></i> Sản phẩm chính hãng</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-3.5 uppercase  text-green-950" style={{ 'font-family': 'sans-serif' }}> <i className='bi bi-box2 text-7 font-semibold text-green-950  mr-1'></i> Được chứng nhận từ các cơ sở </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-3.5 uppercase  text-green-950" style={{ 'font-family': 'sans-serif' }}><i className='bi bi-headset text-7 font-semibold text-green-950  mr-1'></i> HOTLINE HỔ TRỢ 09896.5565 </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-3.5 uppercase  text-green-950" style={{ 'font-family': 'sans-serif' }}><i className='bi bi-arrow-repeat text-7 font-semibold text-green-950  mr-1'></i> Thủ tục đổi trả dễ dàng</span>
                    </div>

                    {/* <div>
                      <span className="w-full border borer-slate-100 block rounded-3 h-24 p-3 focus:outline-none">{stateInfoProduct.Thong_tin_bao_hanh}</span>
                    </div> */}
                  </div>
                  <div className="flex pl-10 mt-7">
                    <div onClick={() => { setModalBuyNow(true); setStateProductBuyNow(stateInfoProduct) }} className="w-2/3 bg-red-600 hover:bg-red-800 text-center py-1 rounded-3 cursor-pointer  ">
                      <button className="text-white text-3 font-bold">MUA NGAY</button>
                    </div>
                    <div className="w-1/3 pl-2">
                      {
                        email ?
                          <div onClick={handleOnclickAddCart} className="bg-yellow-600 rounded-3 text-center cursor-pointer hover:bg-yellow-800">
                            <i class="bi bi-cart-plus-fill text-6 text-white"></i>
                            <button className=" ml-2 text-3 text-white font-bold">THÊM GIỎ HÀNG</button>
                          </div>
                          :
                          <div onClick={() => setShowModalSignIn(true)} className="bg-yellow-600 rounded-3 text-center cursor-pointer hover:bg-yellow-800">
                            <i class="bi bi-cart-plus-fill text-6 text-white"></i>
                            <button className=" ml-2 text-3 text-white font-bold">THÊM GIỎ HÀNG</button>
                          </div>
                      }

                    </div>
                  </div>
                </div>
                <div className="p-2 mt-2 bg-slate-50" style={{ 'width': '22.5%' }}>
                  <div className="w-full h-full pt-10">
                    <span className="font-semibold text-gray-800 shadow-soft-xxs block w-full bg-white text-center p-2">Thông tin bảo hành</span>
                    <div className="p-4">
                      <span className="text-4 text-gray-800"><i class="bi bi-clipboard-check text-5 text-green-600 rounded-8 leading-10  mr-2 font-semibold"></i>{stateInfoProduct.Thong_tin_bao_hanh}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            infoProductDetail ?
              infoProductDetail.errCode === '0' ?
                <div className="mt-20">
                  <div className="flex mx-20 border rounded-2 shadow-soft-xxs">
                    <div className="w-1/2 p-5">
                      <div className="w-full">
                        <img className="w-full rounded-2" src={infoProductDetail.info.Hinh_anh} />
                      </div>
                    </div>
                    <div className="w-/2 p-5">
                      <div>
                        <span className="font-bold text-4">THÔNG SỐ KĨ THUẬT</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">Công nghệ màn hình : &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.Cong_nghe_man_hinh}</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">Độ phân giải: &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.Do_phan_giai}</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">Hệ điều hành : &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.He_dieu_hanh}</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">Chíp xử lý (CPU) : &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.Chip_xu_ly}</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">Bộ nhớ ROM : &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.Bo_nho_ROM}</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">RAM : &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.RAM}</span>
                      </div>
                      <div className="my-2">
                        <label className="font-bold text-3.5">Dung lượng pin : &nbsp;&nbsp;</label>
                        <span className="text-3.5">{infoProductDetail.info.Dung_luong_PIN}</span>
                      </div>
                    </div>
                  </div>
                </div> : ''
              : ''
          }
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
      <div className='px-32 bg-slate-50'>
        <div className='bg-white w-full p-8 px-20 rounded-5'>
          <ReviewProduct product={stateInfoProduct} />
          <ShowReviewProduct product={stateInfoProduct} />
        </div>
      </div>
      <div>
        {
          hideAddCartMes && <AddCartMes isClose={handleCloseMes} />
        }
      </div>
      <div>
        {showModalSignIn && <div className='fixed flex z-sticky items-center bg-slate-950 justify-center left-0 top-0 right-0 bottom-0'>
          <SignIn isClose={handleCloseModal} mes={'Vui lòng đăng nhập để thêm giỏ hàng'} />
        </div>}
      </div>

      <div>
        {modalBuyNow && <div className='fixed flex z-sticky items-center bg-slate-950 justify-center left-0 top-0 right-0 bottom-0'>
          <ModalBuyNow isClose={handleCloseModalBuyNow} product={stateProductBuyNow} />
        </div>}
      </div>
    </>
  )
}

export default DetailProduct
