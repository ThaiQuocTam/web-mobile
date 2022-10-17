import { handleUserLogin, checkUserEmail } from "../services/userService"
const express = require('express')

const handleSignIn = async (req, res) => {
    let email = req.body.Email
    let password = req.body.Mat_khau

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Vui lòng nhập đầy đủ thông tin    '
        })
    }

    let userData = await handleUserLogin(email, password)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : ''
    })
}

const handleSignUp = async (req, res) => {
    let hoTen = req.body.Ho_ten
    let email = req.body.Email
    let dienThoai = req.body.Dien_thoai
    let matKhau = req.body.Mat_khau
    let gioiTinh = req.body.Gioi_tinh
    let quyen = req.body.Id_phan_quyen
}

module.exports = {
    handleSignIn: handleSignIn
}