import db from '../models/index'

const postReview = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let mesCreteReview = {}
            if (data) {
                await db.review.create({
                    Ten_nguoi_dung: data.Ten_nguoi_dung,
                    Noi_dung: data.Noi_dung,
                    Quyen: data.Quyen,
                    Id_nguoi_dung: data.Id_nguoi_dung,
                    Id_san_pham: data.Id_san_pham
                })
                mesCreteReview.errCode = '0'
                mesCreteReview.message = 'Thêm thành công'
            }

            resolve(mesCreteReview)
        } catch (e) {
            console.log(e);
            reject(e)
        }
    })
}

module.exports = {
    postReview: postReview
}