import axios from 'axios';

const URL = 'http://localhost:9000'

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

export const apiTopSmartphone = () => axios.get(`${URL}/api/top-smartphone`)
