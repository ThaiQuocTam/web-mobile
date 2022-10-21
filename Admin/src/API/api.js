import axios from 'axios';

const URL = 'http://localhost:9000'

export const apiGetListProductType = () => axios.get(`${URL}/api/get-list-product-type`)
export const apiGetListProductGroup = () => axios.get(`${URL}/api/get-list-product-group`)
export const apiPostCreateProduct = (payload) => axios.post(`${URL}/api/add-Product`, {
    Ten_san_pham: payload.Ten_san_pham,
    Hinh_anh: payload.Hinh_anh,
    Gia_san_pham: payload.Gia_san_pham,
    So_luong_SP: payload.So_luong_SP,
    Thong_tin_bao_hanh: payload.Thong_tin_bao_hanh,
    Ghi_chu: payload.Ghi_chu,
    Id_loai_SP: payload.Id_loai_SP,
    Id_nhom_SP: payload.Id_nhom_SP
})