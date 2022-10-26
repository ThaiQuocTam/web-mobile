import axios from 'axios';

const URL = 'http://localhost:7001'

export const apiSignIn = (payload) => axios.post(`${URL}/api/signIn`, {
    Email: payload.Email,
    Mat_khau: payload.Mat_khau
})

export const apiSignUp = (payload) => axios.post(`${URL}/api/signUp`, {
    Ho_ten: payload.Ho_ten,
    Email: payload.Email,
    Mat_khau: payload.Mat_khau,
    Gioi_tinh: payload.Gioi_tinh,
    Dien_thoai: payload.Dien_thoai
})

export const apiTopSmartphone = (payload) => axios.get(`${URL}/api/top-smartphone?Id_nhom_SP=${payload}`)

export const apiTopTablet = (payload) => axios.get(`${URL}/api/top-smartphone?Id_nhom_SP=${payload}`)

export const apiGetInfoProduct = (payload) => axios.get(`${URL}/api/get-info-product?id=${payload}`)

export const apiGetListSmartphone = (payload) => axios.get(`${URL}/api/get-smartphone?id=${payload}`)
