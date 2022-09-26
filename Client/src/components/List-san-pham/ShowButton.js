import React from "react";
import { Link } from "react-router-dom"

const ShowButton = () => {
    return (
        <>
            <div className='bg-red-600 text-center p-1 rounded-1 shadow-soft-2xl hover:bg-red-800 animate-modalForm'>
                <Link to='#'>
                    <div>
                        <button className='text-3.5 font-semibold text-white'>Xem chi tiết</button>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ShowButton