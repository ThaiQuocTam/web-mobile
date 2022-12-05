import { useEffect, useState } from "react"
import { infoProductSelector } from '../../redux/selector'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const FormVersionProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const infoProduct = useSelector(infoProductSelector)
    const [stateInfoProduct, setStateInfoProduct] = useState({
        Ten_san_pham: '',
        Gia_san_pham: '',
        Thong_tin_khuyen_mai: '',
        Hinh_anh: '',
        email: '',
        id_Product: ''
    })
    const [stateVersionProduct, setStateVersionProduct] = useState()

    let email = localStorage.getItem("User")
    const idProductStore = localStorage.getItem('idProduct')

    useEffect(() => {
        try {
            if (idProductStore) {
                dispatch(actions.getInfoProductAction.getInfoProductRequest(idProductStore))
                dispatch(actions.getInfoProductDetailAction.getInfoProductDetailRequest(idProductStore))
                axios.get(`http://localhost:7001/api/get-info-version-product?Id_SP=${idProductStore}`)
                    .then(dataVersion => setStateVersionProduct(dataVersion.data))
                    .catch(e => console.log(e))
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

    return (
        <>
            <form className="overflow-hidden">
                <div className="border-2 mb-2 hover:border-green-500 border-gray-500 w-32 p-2 rounded-2 text-center float-left mr-5 relative cursor-pointer">
                    <input checked className="absolute left-5  top-7 cursor-pointer" type='radio' name='Phien_bang' />
                    <div className="w-10 h-10 mx-auto">
                        <img className="w-full" src={stateInfoProduct.Hinh_anh || ''} />
                    </div>
                    <span className="text-3 text-gray-700 font-semibold" style={{ 'font-family': 'sans-serif' }}>Bản chính</span>
                    <br />
                    <span className="text-3 text-red-500 font-semibold" style={{ 'font-family': 'sans-serif' }}>{stateInfoProduct.Gia_san_pham.toLocaleString() || ''} ₫</span>
                </div>
                {
                    stateVersionProduct && stateVersionProduct.length !== 0 ?
                        stateVersionProduct.map((item, index) => (
                            <div className="border-2 mb-2 hover:border-green-500 border-gray-500 w-32 p-2 rounded-2 text-center float-left mr-5 relative cursor-pointer">
                                <input className="absolute left-5 top-7 cursor-pointer" type='radio' name='Phien_bang' />
                                <div className="w-10 h-10 mx-auto">
                                    <img className="w-full" src={item.Anh_phien_ban} />
                                </div>
                                <span className="text-3 text-gray-700 font-semibold" style={{ 'font-family': 'sans-serif' }}>{item.Ten_phien_ban}</span>
                                <br />
                                <span className="text-3 text-red-500 font-semibold" style={{ 'font-family': 'sans-serif' }}>{item.Gia_phien_ban.toLocaleString()} ₫</span>
                            </div>
                        ))
                        : ''
                }
            </form>
        </>
    )
}

export default FormVersionProduct