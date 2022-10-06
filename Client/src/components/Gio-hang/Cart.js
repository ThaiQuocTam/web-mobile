import React from 'react'
import './Cart.css';

const Cart = () => {
    return (
    <div className="flex ">
      <div className="w-1/3 mt-10 p-3 bg-white">
      <h2 className="text-center"> Giỏ hàng</h2>
        <form className="border border-gray-500 rounded-[12px]">
            <div>
                <img className="object-cover h-full w-full" src='https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2022/09/08/1111.png'/>
            </div>
            <div className="p-4 text-center">
                <p className="mt-4">Tên điện thoại: Iphone 14 Pro Max</p>
                <p className="mt-4">Giá điện thoại: 200000$</p>
                <p className="mt-4">Số lượng</p>
                <input className="minus is-form " type="button" onClick="tru()" value="-"/>
                <input aria-label="quantity" className="input-qty" max="10" min="1" name="" type="number" value="1" id="textbox"/>
                <input className="plus is-form" type="button" onClick="cong()" value="+"/>  
            </div>
        </form>
        <div>
            <p>Tổng thanh toán: </p>
            <p>200000$</p>
        </div>
      </div>
      <div className="w-1/2 mt-10 p-3 bg-white">
      <h2> Thông tin đặt hàng</h2>
        <form className="border border-gray-500 rounded-[12px]">
          <div className="p-4">
            <div className="mt-4">
              <label>Họ và Tên</label>
              <input
                type="text"
                name="hovaten"
                placeholder="VD: Trần Văn A"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Số điện thoại</label>
              <input
                type="number"
                name="sdt"
                placeholder="VD: 09883748374"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Địa chỉ nhận hàng</label>
              <input
                type="text"
                name="diachinhanhang"
                placeholder="VD: Tổ 60, KV 7, p.Nhơn Bình, tp.Quy Nhơn, t.Bình Định"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="VD: tranvana@gmail.com"
                className="mt-1 p-2 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <label>Ghi chú</label>
              <textarea
                type="text"
                name="ghichu"
                className="mt-1 p-2 h-44 focus:outline-none bg-gray-200 rounded border border-gray-400 w-full"
              />
            </div>
            <div className="mt-4">
              <input
                type="submit"
                value="Xác nhận đặt hàng"
                className="mt-1 p-2 w-full hover:bg-purple-800 border focus:outline-none border-gray-400 rounded cursor-pointer bg-purple-600 text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    )
}
export default Cart
