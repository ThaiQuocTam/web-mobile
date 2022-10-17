import db from "../models/index"
import bcrypt from "bcryptjs"

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email)
            if (isExist) {
                let user = await db.nguoi_dung.findOne({
                    attributes: ['Email', 'Id_phan_quyen', 'Mat_khau'],
                    where: { Email: email },
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.Mat_khau)
                    // let check = true
                    if (check) {
                        userData.errCode = 0,
                            userData.errMessage = 'Đăng nhập thành công',

                            delete user.Mat_khau,
                            userData.user = user
                    }
                    else {
                        userData.errCode = 2,
                            userData.errMessage = 'Mật khẩu không chính xác'

                    }
                } else {
                    //asd
                    userData.errCode = 3,
                        userData.errMessage = 'Không tìm thấy người dùng';
                }
            } else {
                userData.errCode = 1,
                    userData.errMessage = `Email không tồn tại. Vui lòng thử lại`;
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

let compareUserPassword = () => {
    return new Promise((resolve, reject) => {
        try {

        } catch (e) {
            reject(e)
        }
    })
}

const checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.nguoi_dung.findOne({
                where: { Email: userEmail }
            })
            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

export { handleUserLogin, checkUserEmail }