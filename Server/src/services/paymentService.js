import db from '../models/index'

const handlePostPayment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let messagePayment = {}
            let postBill = await db.hoa_don.create({
                Ho_ten: data.Ho_ten,
                So_dien_thoai: data.So_dien_thoai,
                Email: data.Email,
                Dia_chi_nhan_hang: data.Dia_chi_nhan_hang,
                Ghi_chu: data.Ghi_chu,
                Tong_tien: data.Tong_tien,
                Trang_thai: 1,
                Id_nguoi_dung: data.Id_nguoi_dung
            })
            if (postBill) {
                let postOderDetail = await db.chi_tiet_hd.create({
                    Ten_san_pham: data.Ten_san_pham,
                    Gia_san_pham: data.Gia_san_pham,
                    So_luong: data.So_luong,
                    Id_HD: id
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    handlePostPayment: handlePostPayment
}