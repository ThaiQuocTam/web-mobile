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

    if (!Ho_ten || !Email || !Mat_khau || !Dien_thoai || !Gioi_tinh) {
        return res.status(500).json({
            errCode: 5,
            message: 'Vui lòng nhập đầy đủ thông tin'
        })
    } else {
        let signUpData = await handleRegister(req.body)
        console.log(signUpData);
        return res.status(200).json({
            errCode: signUpData.errCode,
            message: signUpData.message
        })
    }
}

module.exports = {
    handleSignIn: handleSignIn,
    handleSignUp: handleSignUp
}