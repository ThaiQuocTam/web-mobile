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

export const apiGetInfoUser = (payload) => axios.get(`${URL}/api/get-info-user?Email=${payload}`)

export const apiGetBill = (payload) => axios.get(`${URL}/api/get-info-bill?So_dien_thoai=${payload}`)

export const apiGetOderDetail = (payload) => axios.post(`${URL}/api/get-info-oderDetail`, { arrIdOrder: payload })

export const apiGetListProductGroup = () => axios.get(`${URL}/api/get-list-product-group`)

export const apiPostPayment = (payload) => axios.post(`${URL}/api/post-payment`, {
    order: payload.order,
    orderDetail: payload.orderDetail
})

export const apiPostReview = (payload) => axios.post(`${URL}/api/post-review`, payload)

export const apiShowReviewReview = (payload) => axios.get(`${URL}/api/get-show-review?idProduct=${payload.id}&&type=${payload.Loai}`)

export const apiGetInfoProductDetail = (payload) => axios.get(`${URL}/api/get-info-product-detail?Id_san_pham=${payload}`)




