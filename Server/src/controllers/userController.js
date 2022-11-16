import db, { Sequelize } from '../models/index'
const Op = Sequelize.Op
import { handleUserLogin, handleRegister } from "../services/userService"
const express = require('express')

const handleSignIn = async (req, res) => {
    let email = req.body.Email
    let password = req.body.Mat_khau

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Vui lòng nhập đầy đủ thông tin'
        })
    }

    let signInData = await handleUserLogin(email, password)
    return res.status(200).json({
        errCode: signInData.errCode,
        message: signInData.errMessage,
        user: signInData.user ? signInData.user : {}
    })
}

const handleSignUp = async (req, res) => {

    let Ho_ten = req.body.Ho_ten
    let Email = req.body.Email
    let Mat_khau = req.body.Mat_khau
    let Dien_thoai = req.body.Dien_thoai
    let Gioi_tinh = req.body.Gioi_tinh

    console.log(req.body);

    if (!Ho_ten || !Email || !Mat_khau || !Dien_thoai || !Gioi_tinh) {
        return res.status(500).json({
            errCode: 5,
            message: 'Vui lòng nhập đầy đủ thông tin'
        })
    } else {
        let signUpData = await handleRegister(req.body)
        console.log('data', signUpData);
        return res.status(200).json({
            errCode: signUpData.errCode,
            message: signUpData.message
        })
    }
}

const handleGetInfoUser = async (req, res) => {
    try {
        let infoUser = await db.nguoi_dung.findOne({
            where: { Email: req.query.Email }
        })
        if (infoUser) {
            return res.status(200).json(infoUser)
        } else {
            return res.status(500).json({
                errCode: '1',
                message: 'Không tìm thấy người dùng'
            })
        }
    } catch (e) {

    }
}
const handleGetAllInfoUser = async (req, res) => {
    try {
        let infoUser = await db.nguoi_dung.findAll({
            order: [
                ['updatedAt', 'DESC']
            ],
            raw: true
        })
        if (infoUser) {
            return res.status(200).json(infoUser)
        } else {
            return res.status(500).json({
                errCode: '1',
                message: 'Không tìm thấy người dùng'
            })
        }
    } catch (e) {

    }
}

const handleGetSearchMember = async (req, res) => {
    try {
        if (req.query.Ho_ten) {
            console.log(req.query.Ho_ten);
            const data = await db.nguoi_dung.findAll({
                where: {
                    Ho_ten: { [Op.like]: `%${req.query.Ho_ten}%` },
                },
                default: true,
                order: [
                    ['updatedAt', 'DESC']
                ],
                raw: true,
            });

            if (data) {
                return res.status(200).json(data)
            }
            else {
                return res.status(200).json({
                    errCode: '1',
                    data: data
                })
            }
        }
        else {
        }
    } catch (e) { console.log(e) }
}

module.exports = {
    handleSignIn: handleSignIn,
    handleSignUp: handleSignUp,
    handleGetInfoUser: handleGetInfoUser,
    handleGetAllInfoUser: handleGetAllInfoUser,
    handleGetSearchMember: handleGetSearchMember
}

