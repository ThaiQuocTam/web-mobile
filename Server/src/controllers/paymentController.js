import db from "../models"
import paymentService from '../services/paymentService'

const express = require('express')

const handlePostPayment = async (req, res) => {
    try {
        let Ho_ten = req.body.Ho_ten
        let Email = req.body.Email
        let So_dien_thoai = req.body.So_dien_thoai
        let Dia_chi_nhan_hang = req.body.Dia_chi_nhan_hang
        let Tong_tien = req.body.Tong_tien
        let Trang_thai = req.body.Trang_thai
        let Id_nguoi_dung = req.body.Id_nguoi_dung
        let Ten_san_pham = req.body.Ten_san_pham
        let Gia_san_pham = req.body.Gia_san_pham
        let So_luong = req.body.So_luong
        let Id_HD = req.body.Id_HD
        if (!Ho_ten || !Email || !So_dien_thoai || !Dia_chi_nhan_hang || !Tong_tien || !Trang_thai || !Id_nguoi_dung || !Ten_san_pham || !Gia_san_pham || !So_luong || !Id_HD) {
            return res.status(500).json({
                errCode: '1',
                message: 'Chưa đủ thông tin'
            })
        } else {
            let messagePayment = await paymentService.handlePostPayment(req.body)
        }
    } catch (e) {
        console.log(e);
    }
}
