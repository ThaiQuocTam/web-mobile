import axios from 'axios';

const URL = 'http://localhost:9000'

export const apiSignIn = () => axios.post(`${URL}/get-nguoi-dung`)