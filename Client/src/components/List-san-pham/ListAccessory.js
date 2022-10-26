import BackHome from "components/Trang-chu/BackHome"
import { listSmartphone } from "models/Home.model"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ShowButton from "./ShowButton"
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { listProductSelector } from '../../redux/selector'

const ListAccessory = () => {

    const dispatch = useDispatch()
    const listSmartphone = useSelector(listProductSelector)

    const [stateListAccessory, setStateListAccessory] = useState([])
    const [ID, setID] = useState()

    useEffect(() => {
        dispatch(actions.getListSmartphoneAction.getListSmartphoneRequest(2))
    }, [])

    useEffect(() => {
        try {
            if (listSmartphone) {
                setStateListAccessory(listSmartphone)
            }
        } catch (e) {

        }
    }, [listSmartphone])

    const idProduct = stateListAccessory.map((item) => item.id)

    return (
        <>
            <div className="w-full overflow-hidden mb-5">
                <div className="float-left pl-5 pr-5 ml-20 border-l-25 border-green-200 p-2 bg-green-950">
                    <span className='text-4 font-semibold text-white'>PHỤ KIỆN</span>
                </div>
            </div>
            <div className="overflow-hidden w-full ml-14" >
                {stateListAccessory.map((item, index) => (
                    <div onMouseEnter={() => { const exist = idProduct.includes(item.id); exist ? setID(item.id) : '' }} className='p-5 mx-5 my-5 w-60 h-25em box-shadow rounded-2 bg-white float-left'>
                        <div className=''>
                            <img className='mx-auto border-b pb-4 border-gray-300' src={item.Hinh_anh} />
                        </div>
                        <div className='text-center h-24 mb-2'>
                            <div className='pt-2 pb-1 max-h-16 h-16 overflow-hidden'>
                                <span className='text-3.5 font-semibold text-black'>{item.Ten_san_pham} - Chính hãng</span>
                            </div>
                            <div className='pb-2'>
                                <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.Gia_san_pham.toLocaleString()}  ₫</span>
                                <span className='line-through text-3'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}  ₫</span>
                            </div>
                        </div>
                        {
                            ID === item.id ? <ShowButton Id={item.id} /> : ''
                        }

                    </div>

                ))}
            </div>
        </>
    )
}

export default ListAccessory