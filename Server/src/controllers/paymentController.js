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
                if (messagePostOrder && messagePostOrderDetail) {
                    return res.status(200).json({
                        errCode: messagePostOrderDetail.errCode,
                        message: messagePostOrderDetail.message
                    })
                }
            }
            else {
                return res.status(500).json({
                    errCode: '6',
                    message: 'Đặt hàng không thành công'
                })
            }
        }


    } catch (e) {
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
