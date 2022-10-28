import e from 'express'
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
        return res.status(200).json({
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
            order: [
                ['updatedAt', 'DESC']
            ],
            raw: true
        })
        return res.status(200).json(lisProProduct)
    } catch (e) {

    }
}

const handleGetInfoProduct = async (req, res) => {
    try {
        let infoProduct = await productsService.GetInfoProduct(req.query.id)
        return res.status(200).json({
            errCode: infoProduct.errCode,
            message: infoProduct.message,
            data: infoProduct.data ? infoProduct.data : {}
        })
    } catch (e) {
        console.log(e);
    }
}

const handlePostEditInfoProduct = async (req, res) => {
    try {
        console.log(req.body);
        let id = req.body.id
        let Ten_san_pham = req.body.Ten_san_pham
        let Hinh_anh = req.body.Hinh_anh
        let Gia_san_pham = req.body.Gia_san_pham
        let So_luong_SP = req.body.So_luong_SP
        let Thong_tin_bao_hanh = req.body.Thong_tin_bao_hanh
        let Ghi_chu = req.body.Ghi_chu
        let Id_loai_SP = req.body.Id_loai_SP
        let Id_nhom_SP = req.body.Id_nhom_SP

        if (!id || !Ten_san_pham || !Hinh_anh || !Gia_san_pham || !So_luong_SP < 0 || !Id_loai_SP || !Id_nhom_SP) {
            return res.status(500).json({
                errCode: '1',
                message: 'Vui lòng nhập đầy đủ thông tin'
            })
        } else {
            let messageEditInfoProduct = await productsService.PostEditInfoProduct(req.body)
            return res.status(200).json({
                errCode: messageEditInfoProduct.errCode,
                message: messageEditInfoProduct.message
            })
        }
    } catch (e) {
        console.log(e);
    }
}

const handlePostSearchProduct = async (req, res) => {
    try {
        console.log(req.query);
        let data = await productsService.SearchProduct(req.query)
        return res.status(200).json(data)
    } catch (e) {

    }
}

const handleGetSmartphone = async (req, res) => {
    try {
        let data = await db.san_pham.findAll({
            where: { Id_nhom_SP: req.query.id }
        })
        return res.status(200).json(data)
    } catch (e) {

    }
}

const handleGetInfoBill = async (req, res) => {
    try {
        let data = await productsService.getInfoBill(req.query.So_dien_thoai)
        if (data) {
            console.log(data);
            return res.status(200).json(data)
        } else {
            return res.status(500).json({
                errCode: '1',
                message: 'Không tìm thấy Bill'
            })
        }

    } catch (e) {
        console.log(e);
    }
}

const handleGetInfoOderDetail = async (req, res) => {
    try {
        let data = await db.chi_tiet_hd.findOne({
            where: { Id_HD: req.query.Id_HD },
            raw: true
        })
        if (data) {
            return res.status(200).json(data)
        } else {
            return res.status(500).json({
                errCode: '1',
                message: 'Không tìm thấy'
            })
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    handleAddProduct: handleAddProduct,
    handleGetProductGroup: handleGetProductGroup,
    handleGetProductType: handleGetProductType,
    handleGetProduct: handleGetProduct,
    handleGetInfoProduct: handleGetInfoProduct,
    handlePostEditInfoProduct: handlePostEditInfoProduct,
    handlePostSearchProduct: handlePostSearchProduct,
    handleGetSmartphone: handleGetSmartphone,
    handleGetInfoBill: handleGetInfoBill,
    handleGetInfoOderDetail: handleGetInfoOderDetail
}