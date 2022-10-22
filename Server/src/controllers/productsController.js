import db from '../models/index'
import productsService from '../services/productsService'

const handleAddProduct = async (req, res) => {
    let Ten_san_pham = req.body.Ten_san_pham
    let Hinh_anh = req.body.Hinh_anh
    let Gia_san_pham = req.body.Gia_san_pham
    let So_luong_SP = req.body.So_luong_SP
    let Thong_tin_bao_hanh = req.body.Thong_tin_bao_hanh
    let Ghi_chu = req.body.Ghi_chu
    let Id_loai_SP = req.body.Id_loai_SP
    let Id_nhom_SP = req.body.Id_nhom_SP

    if (!Ten_san_pham || !Hinh_anh || !Gia_san_pham || !So_luong_SP || !Id_loai_SP || !Id_nhom_SP) {
        return res.status(500).json({
            errCode: '2',
            message: 'Vui lòng nhập đầy đủ thông tin'
        })
    }
    else {
        let response = await productsService.addProduct(req.body)
        return res.status(200).json({
            errCode: response.errCode,
            message: response.message
        })
    }
}

const handleGetProductType = async (req, res) => {
    try {
        let listProductType = await db.loai_sp.findAll()
        return res.status(200).json(listProductType)
    } catch (e) {
        console.log('Lỗi product-type : ', e);
    }
}

const handleGetProductGroup = async (req, res) => {
    try {
        let listProductGroup = await db.nhom_sp.findAll({
            raw: true
        })
        return res.status(200).json(listProductGroup)
    } catch (e) {
        console.log('Lỗi product-group : ', e);
    }
}

const handleGetProduct = async (req, res) => {
    try {
        let lisProProduct = await db.san_pham.findAll({
            raw: true
        })
        return res.status(200).json(lisProProduct)
    } catch (e) {

    }
}

module.exports = {
    handleAddProduct: handleAddProduct,
    handleGetProductGroup: handleGetProductGroup,
    handleGetProductType: handleGetProductType,
    handleGetProduct: handleGetProduct
}