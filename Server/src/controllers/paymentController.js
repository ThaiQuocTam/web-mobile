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
        let Id_nguoi_dung = req.body.Id_nguoi_dung
        let Ten_san_pham = req.body.Ten_san_pham
        let Gia_san_pham = req.body.Gia_san_pham
        let So_luong = req.body.So_luong
        let Id_HD = req.body.Id_HD
        if (!Ho_ten || !Email || !So_dien_thoai || !Dia_chi_nhan_hang || !Tong_tien || !Id_nguoi_dung) {
            return res.status(500).json({
                errCode: '1',
                message: 'Chưa đủ thông tin'
            })
        } else {
            let messagePayment = await paymentService.postPaymentServicer(req.body)
            if (messagePayment) {
                console.log(messagePayment.infoBill.dataValues.id);
            }
            return res.status(200).json({
                errCode: messagePayment.errCode,
                message: messagePayment.message
            })
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    handlePostPayment: handlePostPayment
}
