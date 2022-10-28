import BackHome from "components/Trang-chu/BackHome"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { listProductSelector } from '../../redux/selector'
import ShowButton from "./ShowButton"

const ListLaptop = () => {

    const dispatch = useDispatch()
    const listLaptop = useSelector(listProductSelector)

    const [stateListLaptop, setStateListLaptop] = useState([])
    const [ID, setID] = useState()

    useEffect(() => {
        dispatch(actions.getListSmartphoneAction.getListSmartphoneRequest(3))
    }, [])

    useEffect(() => {
        try {
            if (listLaptop) {
                setStateListLaptop(listLaptop)
            }
        } catch (e) {

        }
    }, [listLaptop])

    const idProduct = stateListLaptop.map((item) => item.id)


    return (
        <>
            <div>
                <BackHome />
            </div>
            <div className="w-full overflow-hidden mb-5">
                <div className="float-left pl-5 pr-5 ml-20 border-l-25 border-green-200 p-2 bg-green-950">
                    <span className='text-4 font-semibold text-white'>MÁY TÍNH BẢNG</span>
                </div>
            </div>
            <div className="overflow-hidden w-full ml-14">
                {stateListLaptop.map((item, index) => (
                    <div onMouseEnter={() => { const exist = idProduct.includes(item.id); exist ? setID(item.id) : '' }} className='p-5 mx-5 my-5 w-60 h-26em box-shadow rounded-2 bg-white float-left'>
                        <div className=''>
                            <div className=''>
                                <img className='mx-auto w-full border-b border-gray-300' src={item.Hinh_anh} />
                            </div>
                        </div>
                        <div className='text-center h-28'>
                            <div className='pt-2 pb-1 max-h-20 h-20 overflow-hidden'>
                                <span className='text-3.5 font-semibold text-black'>{item.Ten_san_pham}</span>
                            </div>
                            <div className='pb-2'>
                                <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.Gia_san_pham.toLocaleString()}<span className='ml-1'>₫</span></span>
                                <span className='line-through text-3'>{(item.Gia_san_pham + (item.Gia_san_pham * (10 / 100))).toLocaleString()}<span className='ml-1'>₫</span></span>
                            </div>
                        </div>
                        {
                            ID === item.id ? <ShowButton Id={item.id} nameProduct={item.Ten_san_pham} /> : ''
                        }
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListLaptop