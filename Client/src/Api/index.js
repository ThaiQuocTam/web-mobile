import axios from 'axios';

const URL = 'http://localhost:9000'

export const apiSignIn = (payload) => axios.post(`${URL}/api/signIn`, { Email: payload.Email, Mat_khau: payload.Mat_khau })
