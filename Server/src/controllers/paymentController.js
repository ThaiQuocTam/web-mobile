import db from "../models"
import paymentService from '../services/paymentService'

const express = require('express')

const handlePostPayment = async (req, res) => {
    try {
        let payment = {
            order: req.body.order,
            orderDetail: req.body.orderDetail
        }

        if (!payment) {
            return res.status(500).json({
                errCode: '1',
                message: 'Chưa đủ thông tin'
            })
        } else {
            let messagePostOrder = await paymentService.postPaymentServicer(payment)
            if (messagePostOrder) {
                payment.orderDetail.map((item) => {
                    item.Id_HD = messagePostOrder.infoOrder.dataValues.id
                })
                let messagePostOrderDetail = await paymentService.postOrderDetail(payment.orderDetail)
                if (messagePostOrder) {
                    return res.status(200).json({
                        errCode: '0',
                        message: 'Đặt hàng thành công'
                    })
                }
            }
            else {
                console.log('Lỗi order detail');
            }
        }


    } catch (e) {
        console.log(e);
    }
}

const handlePostOrderDetail = async (req, res) => {
    try {
        if (req.body) {

        }
    } catch (e) { }
}

module.exports = {
    handlePostPayment: handlePostPayment
}
