import FlashSale from "components/Trang-chu/FlashSale"
import { Products } from "models/DetailProduct.model"
import { useEffect, useState } from "react"
import { infoProductSelector, infoProductDetailSelector } from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const ListAvatar = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [index, setIndex] = useState(1)
    const [indexListProduct, setIndexListProduct] = useState(0)
    const [positionX, setPositionX] = useState(0)
    const infoProduct = useSelector(infoProductSelector)
    const [stateVersionProduct, setStateVersionProduct] = useState([])

    let email = localStorage.getItem("User")
    const idProductStore = localStorage.getItem('idProduct')

    useEffect(() => {
        try {
            if (idProductStore) {
                dispatch(actions.getInfoProductAction.getInfoProductRequest(idProductStore))
                dispatch(actions.getInfoProductDetailAction.getInfoProductDetailRequest(idProductStore))
            }
        } catch (e) {
        }
    }, [])

    useEffect(() => {
        try {
            if (infoProduct) {
                axios.get(`http://localhost:7001/api/get-info-version-product?Id_SP=${idProductStore}`)
                    .then(dataVersion => {
                        let arrVS = []
                        let versionOrg = {
                            Id_SP: infoProduct.data.id,
                            Ten_phien_ban: 'Bản chính',
                            Gia_phien_ban: infoProduct.data.Gia_san_pham,
                            Anh_phien_ban: infoProduct.data.Hinh_anh
                        }
                        arrVS.push(versionOrg)
                        dataVersion.data.map((item) => {
                            arrVS.includes(item) ? '' : arrVS.push(item)
                        })
                        setStateVersionProduct([...arrVS])
                    })
                    .catch(e => console.log(e))

            } else {
            }
        } catch (e) {

        }
    }, [infoProduct])

    useEffect(() => {
        console.log('hahaha');
        const timerId = setTimeout(() => {
            let indexX = 0
            if (stateVersionProduct) {
                stateVersionProduct.map((item, index) => {
                    indexX = index += 1
                })
                setIndexListProduct(indexX)
                setIndex(pre => pre + 1)
                if (index < indexX) {
                    setPositionX(pre => pre - 340)
                }
                else {
                    setPositionX(0)
                    setIndex(1)
                }
            }
        }, 3000)
        return () => clearTimeout(timerId)
    }, [positionX || stateVersionProduct])

    const handlePre = () => {
        if (positionX !== 0) {
            setIndex(pre => pre - 1)
            setPositionX(pre => pre + 340)
        }
    }

    const handleNext = () => {
        if (index < indexListProduct) {
            setIndex(pre => pre + 1)
            setPositionX(pre => pre - 340)
        }
        else {
            setPositionX(0)
            setIndex(1)
        }
    }

    useEffect(() => {
        let indexProps = props.indexVersion
        setPositionX(0)

        // if (stateVersionProduct) {

        //     // setIndexListProduct(indexX)
        //     // setIndex(pre => pre + 1)
        //     if (index < indexX) {
        //         setPositionX(pre => pre - 340)
        //     }
        //     else {
        //         setPositionX(0)
        //         setIndex(1)
        //     }
        // }
    }, [props.indexVersion])

    return (
        <>
            <div className='' style={{ 'width': '32.5%' }}>
                <div className=' w-full relative overflow-hidden mt-2 border shadow-soft-xxs rounded-4'>
                    <div className="slider max-w-90 float-left">
                        <i onClick={handlePre} className="bi bi-caret-left-fill bg-gray-600 text-white inline-block h-11 w-10 absolute left-0 text-center leading-10 slider-prev border-2 border-gray-200 hover:bg-slate-700 text-4"></i>
                        <div className="slider-wrapper" style={{ 'width': '124%' }}>
                            <div className="slider-main w-80 p-5  border-slate-100" style={{ 'transform': `translate(${positionX}px)` }}>
                                {
                                    stateVersionProduct && stateVersionProduct.length !== 0 ?
                                        stateVersionProduct.map((item) => (
                                            <div className="slider-item w-20" style={{ 'margin-left': '38px', 'margin-right': '20px' }}>
                                                <img
                                                    className="block w-full"
                                                    src={item.Anh_phien_ban}
                                                    alt=""
                                                />
                                            </div>
                                        ))
                                        : ''

                                }

                            </div>
                        </div>
                        <i onClick={handleNext} className="bi bi-caret-right-fill bg-gray-600 text-white h-11 w-10 absolute right-0 mr-28 text-4 slider-next border-2 border-gray-200 hover:bg-slate-700" style={{ 'right': '-188px' }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListAvatar