import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/actions'
import { useEffect, useState } from 'react'
import {
    listProductGroupSelector,
} from 'redux/selector/selector';
import axios from 'axios';

const ProductGroup = () => {

    const dispatch = useDispatch()
    const listProductGroup = useSelector(listProductGroupSelector)

    const [stateListProductGroup, setStateListProductGroup] = useState()
    const [stateValue, setStateValue] = useState('')
    const [message, setMessage] = useState()

    useEffect(() => {
        dispatch(actions.getListProductGroupAction.getListProductGroupRequest())
    }, [message])

    useEffect(() => {
        if (listProductGroup) {
            setStateListProductGroup(listProductGroup)
        }
    }, [listProductGroup])

    const handleSubmit = () => {
        if (stateValue !== '') {
            axios.post(`http://localhost:7001/api/post-add-product-group`, { Ten_nhom: stateValue })
                .then(messSuccess => ysetMessage(messSuccess.data))
                .catch(messErr => console.log(messErr))
        }
    }

    return (
        <>
            <div>
                <div>
                    <div className='mb-5 border-b borer-gray-500'>
                        <h4>Danh sách nhóm sản phẩm</h4>
                    </div>

                    <div className='mb-10 overflow-hidden'>
                        <form>
                            <div className='flex'>
                                <div className='w-30pc leading-10'>
                                    <span> Tên nhóm sản phẩm</span>
                                </div>
                                <div className='w-70pc pr-10pc  '>
                                    <input
                                        value={stateValue}
                                        onChange={(e) => setStateValue(e.target.value)}
                                        placeholder='Nhap ten nhom san pham'
                                        className='w-full border rounded-2 placeholder:text-3 placeholder:text-gray-500 text-3.5 text-gray-600 border-gray-400 p-2 pl-5 outline-none focus:border-sky-500 hover:border-sky-500' />
                                </div>
                            </div>
                            <div onClick={handleSubmit} className='float-right pr-30 mt-2 cursor-pointer'>
                                <span className='p-2 text-3.5 block bg-slate-400 text-white px-10 hover:bg-slate-600 rounded-2'>Thêm nhóm</span>
                            </div>
                        </form>
                    </div>

                    <div className='w-full mt-10'>
                        <table className="w-full border-b border-gray-500">
                            <thead className=" border-b w-full">
                                <tr>
                                    <th scope="col" className="text-sm sticky top-0 bg-gray-400 font-semibold py-2 px-2 text-4 text-black  text-center">
                                        STT
                                    </th>
                                    <th scope="col" className="text-sm sticky w-full top-0 bg-gray-400 font-semibold py-2 px-2 text-4 text-black  text-center">
                                        Tên nhóm sản phẩm
                                    </th>
                                    <th scope="col" className="text-sm sticky w-full top-0 bg-gray-400 font-semibold py-2 px-2 text-4 text-black  text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    stateListProductGroup ?
                                        stateListProductGroup.map((item, index) => (
                                            <>
                                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td className="whitespace-nowrap text-center text-3.5 text-sm font-medium text-gray-900 px-2 py-2">
                                                        {index + 1}
                                                    </td>
                                                    <td className="whitespace-nowrap text-center text-3.5 text-sm font-medium text-gray-900 px-2 py-2">
                                                        {item.Ten_nhom}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap text-center">
                                                        <button onClick={() => setStateValue(item.Ten_nhom)} className="px-4 py-1 text-sm text-black border-black font-semibold hover:bg-slate-600 hover:text-white hover:border-white border-2 rounded">Sửa</button>
                                                    </td>
                                                </tr>
                                            </>

                                        )) : ''
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductGroup