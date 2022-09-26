import { listTable } from "models/Home.model"
import { useState } from "react"
import ShowButton from "./ShowButton"

const ListTablet = () => {

    const idProducts = listTable.map(item => item.id)
    const [ID, setID] = useState(0)

    return (
        <>
            <div className="w-full overflow-hidden mb-5">
                <div className="float-left pl-5 pr-5 ml-20 border-l-25 border-green-200 p-2 bg-green-950">
                    <span className='text-4 font-semibold text-white'>MÁY TÍNH BẢNG</span>
                </div>
            </div>
            <div className="overflow-hidden w-full ml-14">
                {listTable.map((item, index) => (
                    <div onMouseEnter={() => { const exist = idProducts.includes(item.id); exist ? setID(item.id) : '' }} className='p-5 mx-5 my-5 w-60 h-96 box-shadow rounded-2 bg-white float-left'>
                        <div className=''>
                            <div className=''>
                                <img className='mx-auto w-full' src={item.image} />
                            </div>
                        </div>
                        <div className='text-center h-36'>
                            <div className='pt-2 pb-1'>
                                <span className='text-3.5 font-semibold text-black'>{item.name}</span>
                            </div>
                            <div className='pb-2'>
                                <span className='line-through text-3'>{item.discount}<span className='ml-1'>₫</span></span>
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

export default ListTablet