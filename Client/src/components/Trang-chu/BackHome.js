import React from 'react'
import { Link } from 'react-router-dom'

const BackHome = () => {
    return (
        <>
            <Link className="relative right-44 leading-9 h-9 mb-5 block text-green-600 hover:text-green-800" to="/">
                <i className="bi bi-arrow-left-circle icon text-8  mr-2 " />
                <strong className='text-4  '>Quay lại</strong>
            </Link  >
        </>
    )
}

export default BackHome

