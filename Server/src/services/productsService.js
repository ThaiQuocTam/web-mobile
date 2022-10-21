import db from "../models/index"

const addProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        let addProductMessage = {}
        try {
            let check = await checkNameProduct(data.Ten_san_pham)
            if (check) {
                addProductMessage.errCode = '1'
                addProductMessage.message = 'Tên đã tồn tại!'
            }
            else {
                await db.san_pham.create({
                    Ten_san_pham: data.Ten_san_pham,
                    Hinh_anh: data.Hinh_anh,
                    Gia_san_pham: data.Gia_san_pham,
                    So_luong_SP: data.So_luong_SP,
                    Thong_tin_bao_hanh: data.Thong_tin_bao_hanh,
                    Ghi_chu: data.Ghi_chu,
                    Id_loai_SP: data.Id_loai_SP,
                    Id_nhom_SP: data.Id_nhom_SP
                })
                addProductMessage.errCode = '0'
                addProductMessage.message = 'Thêm sản phẩm thành công'
            }
            resolve(addProductMessage)
        } catch (e) {
            reject(e)
        }
    })
}

const checkNameProduct = async (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkName = await db.san_pham.findOne({
                where: { Ten_san_pham: name },
                raw: true
            })

            if (checkName) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    addProduct: addProduct
}