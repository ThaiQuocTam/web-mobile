import BackHome from "components/Trang-chu/BackHome"
import { listSmartphone } from "models/Home.model"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ShowButton from "./ShowButton"
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { listProductSelector } from '../../redux/selector'
import LimitProduct from "components/Trang-chu/LimitProduct"

const ListSmartphone = () => {

    const dispatch = useDispatch()
    const listSmartphone = useSelector(listProductSelector)
    const navigate = useNavigate()

    const [stateListSmartphone, setStateListSmartphone] = useState([])
    const [ID, setID] = useState()

    const nameProductGroupLocal = localStorage.getItem("nameProductGroup")
    const idProductGroupLocal = localStorage.getItem("idProductGroup")

    useEffect(() => {
        dispatch(actions.getListSmartphoneAction.getListSmartphoneRequest(idProductGroupLocal || 1))
    }, [idProductGroupLocal])

    useEffect(() => {
        try {
            if (listSmartphone) {
                setStateListSmartphone(listSmartphone)
            }
        } catch (e) {

        }
    }, [listSmartphone])

    const refreshPage = () => {
        navigate(0);
    }

    const idProduct = stateListSmartphone.map((item) => item.id)

    return (
        <>
            <div>
                <BackHome />
            </div>
            <div className="w-full overflow-hidden mb-5">
                <div className="float-left pl-5 pr-5 ml-20 border-l-25 border-green-200 p-2 bg-green-950">
                    <span className='text-4 font-semibold text-white'>{nameProductGroupLocal || 'Điện Thoại'}</span>
                </div>
            </div>
            <div className="overflow-hidden w-full ml-14" >
                {stateListSmartphone.map((item, index) => (
                    <div onMouseEnter={() => { const exist = idProduct.includes(item.id); exist ? setID(item.id) : '' }} className='p-5 relative mx-5 my-5 w-60 h-25.5em  box-shadow rounded-2 bg-white float-left'>
                        {
                            item.So_luong_SP <= 5 ? <LimitProduct soLuong={item.So_luong_SP} /> : ''

                        }
                        <div className='shadow-soft-xs rounded-2'>
                            <img className='mx-auto pb-4 border-gray-300' src={item.Hinh_anh} />
                        </div>
                        <div className='text-center h-24 mb-2'>
                            <div className='pt-2 pb-1max-h-20 h-20 overflow-hidden'>
                                <span className='text-3.5 font-semibold text-black'>{item.Ten_san_pham} - Chính hãng</span>
                            </div>
                            <div className='pb-2'>
                                <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.Gia_san_pham.toLocaleString()}  ₫</span>
                                <span className='line-through text-3'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}  ₫</span>
                            </div>
                        </div>
                        {
                            ID === item.id ? <div className="mt-5"> <ShowButton Id={item.id} nameProduct={item.Ten_san_pham} /> </div> : ''
                        }

                    </div>

                ))}
            </div>
        </>
    )
}

export default ListSmartphone