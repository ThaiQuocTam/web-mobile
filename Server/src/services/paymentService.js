import db from '../models/index'

const postPaymentServicer = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let messageOrder = {}
            let infoOrder = await db.hoa_don.create({
                Ho_ten: data.order.Ho_ten,
                So_dien_thoai: data.order.So_dien_thoai,
                Email: data.order.Email,
                Dia_chi_nhan_hang: data.order.Dia_chi_nhan_hang,
                Ghi_chu: '',
                Tong_tien: data.order.Tong_tien,
                Trang_thai: 1,
                Id_nguoi_dung: data.order.Id_nguoi_dung,
            }
            )
            messageOrder.infoOrder = infoOrder
            messageOrder.errCode = '0'
            messageOrder.message = 'Thêm hóa đơn thành công'
            resolve(messageOrder)
        } catch (e) {
            reject(e)
        }
    })
}

const postOrderDetail = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let messagePostOrderDetail = {}
            if (data) {
                await db.chi_tiet_hd.bulkCreate(data)
                messagePostOrderDetail.errCode = '0'
                messagePostOrderDetail.message = 'Thêm chi tiết thành công'
            }
            resolve(messagePostOrderDetail)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    postPaymentServicer: postPaymentServicer,
    postOrderDetail: postOrderDetail
}