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

export const apiTopSmartphone = () => axios.get(`${URL}/api/top-smartphone`)
export const apiGetBill = (payload) => axios.get(`${URL}/api/get-info-bill?So_dien_thoai=${payload}`)
export const apiGetOderDetail = (payload) => axios.get(`${URL}/api/get-info-oderDetail?Id_HD=${payload}`)
