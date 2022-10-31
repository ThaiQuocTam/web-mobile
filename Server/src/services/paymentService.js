import db from '../models/index'

const postPaymentServicer = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let messagePayment = {}
            let infoBill = await db.hoa_don.create({
                Ho_ten: data.Ho_ten,
                So_dien_thoai: data.So_dien_thoai,
                Email: data.Email,
                Dia_chi_nhan_hang: data.Dia_chi_nhan_hang,
                Ghi_chu: data.Ghi_chu,
                Tong_tien: data.Tong_tien,
                Trang_thai: 1,
                Id_nguoi_dung: data.Id_nguoi_dung,
            }
            )
            messagePayment.errCode = '0'
            messagePayment.message = 'Tạo thành công'
            messagePayment.infoBill = infoBill
            if (infoBill) {
                await db.chi_tiet_hd.create({
                    Ten_san_pham: data.Ten_san_pham,
                    Gia_san_pham: data.Gia_san_pham,
                    So_luong: data.So_luong,
                    Id_HD: infoBill.dataValues.id
                })
            }
            resolve(messagePayment)
            // if (postBill) {
            //     let postOderDetail =
            //        
            // }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    postPaymentServicer: postPaymentServicer
}