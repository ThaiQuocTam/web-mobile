import BackHome from "components/Trang-chu/BackHome"
import { listSmartphone } from "models/Home.model"
import { useState } from "react"
import { Link } from "react-router-dom"
import ShowButton from "./ShowButton"

const ListSmartphone = () => {
    const idProducts = listSmartphone.map(item => item.id)
    const [ID, setID] = useState(0)

    return (
        <>
            <div>
                <BackHome />
            </div>
            <div className="w-full overflow-hidden mb-5">
                <div className="float-left pl-5 pr-5 ml-20 border-l-25 border-green-200 p-2 bg-green-950">
                    <span className='text-4 font-semibold text-white'>ĐIỆN THOẠI</span>
                </div>
            </div>
            <div className="overflow-hidden w-full ml-14" >
                {listSmartphone.map((item, index) => (
                    <div onMouseEnter={() => { const exist = idProducts.includes(item.id); exist ? setID(item.id) : '' }} className='p-5 mx-5 my-5 w-60 h-90 box-shadow rounded-2 bg-white float-left'>
                        <div className=''>
                            <div className=''>
                                <img className='mx-auto' src={item.image} />
                            </div>
                        </div>
                        <div className='text-center h-20 mb-2'>
                            <div className='pt-2 pb-1'>
                                <span className='text-3.5 font-semibold text-black'>{item.name}</span>
                            </div>
                            <div className='pb-2'>
                                <span className='text-red-600 text-3.5 mr-5 font-semibold'>{item.price}</span>
                                <span className='line-through text-3'>{item.discount}</span>
                            </div>
                        </div>
                        {
                            ID === item.id ? <ShowButton /> : ''
                        }

                    </div>

                ))}
            </div>
        </>
    )
}

export default ListSmartphone