import { raw } from "body-parser"
import e from "express"
import db from "../models"
import paymentService from '../services/paymentService'

const express = require('express')

const handlePostPayment = async (req, res) => {
    try {
        let payment = {
            order: req.body.order,
            orderDetail: req.body.orderDetail
        }
        console.log(payment);
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
                if (messagePostOrderDetail && messagePostOrderDetail.errCode !== '0') {
                    await db.hoa_don.destroy({
                        where: { id: messagePostOrder.infoOrder.dataValues.id }
                    })
                    return res.status(200).json({
                        errCode: messagePostOrderDetail.errCode,
                        message: messagePostOrderDetail.message
                    })
                }
                else {
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

const handleGetInfoOder = async (req, res) => {
    try {
        let data = await db.hoa_don.findAll({
            raw: true
        })
        return res.status(200).json(data)
    } catch (e) {
        console.log(e);
    }
}

const handleGetInfoOrderDetail = async (req, res) => {
    try {
        if (req.query.Id_HD) {
            let data = await db.chi_tiet_hd.findAll({
                where: { Id_HD: req.query.Id_HD },
                raw: true
            })

            data ? res.status(200).json(data) : res.status(200).json({ errCode: '1', message: 'Không tìm thấy' })
        }
    } catch (e) { console.log(e); }
}

module.exports = {
    handlePostPayment: handlePostPayment,
    handleGetInfoOder: handleGetInfoOder,
    handleGetInfoOrderDetail: handleGetInfoOrderDetail
}
