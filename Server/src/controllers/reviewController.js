import db, { Sequelize } from '../models/index'
import reviewService from '../services/reviewService'
const Op = Sequelize.Op

const handlePostReview = async (req, res) => {
    try {
        if (req.body) {
            console.log('1');
            let mesPostReview = await reviewService.postReview(req.body)
            if (mesPostReview) {
                return res.status(200).json({
                    errCode: mesPostReview.errCode,
                    message: mesPostReview.message
                })
            }
        } else {
            return res.status(400).json({
                errCode: '1',
                message: 'Chưa có thông tin'
            })
        }
    } catch (e) { }
}

const handleShowReview = async (req, res) => {
    try {
        if (req.query.idProduct && req.query.type) {
            let idProduct = req.query.idProduct
            let type = req.query.type
            let data = await db.review.findAll({
                where: { Id_san_pham: idProduct, Loai: type },
                order: [
                    ['createdAt', 'DESC']
                ],
                raw: true
            })
            if (data.length === 0) {
                return res.status(200).json({
                    errCode: '1',
                    message: 'Không tìm thấy sản phẩm'
                })
            }
            else {
                return res.status(200).json(data)

            }
        }
    } catch (e) { }
}

const handleInfoReviewNotResponse = async (req, res) => {
    let listReview = []
    let listReviewResponse = await db.review.findAll({
        where: { Loai: 2, Id_phan_quyen: 7 },
        order: [[
            'createdAt', 'DESC'
        ]],
        raw: true
    })
    let listReviewNotResponse = await db.review.findAll({
        where: { Loai: 1, Id_phan_quyen: 6 },
        order: [[
            'createdAt', 'DESC'
        ]],
        raw: true
    })
    if (listReviewNotResponse && listReviewResponse) {
        let i
        let j
        let listArrNew = []
        for (i = 0; i < listReviewNotResponse.length; i++) {
            for (j = 0; j < listReviewResponse.length; j++) {
                if (listReviewResponse[j].Id_review_user === listReviewNotResponse[i].id) {
                    listArrNew.push(listReviewNotResponse[i])
                }
                else {
                }
            }
        }
        listReviewNotResponse.push(...listArrNew)
        checkArr(listReviewNotResponse, listReviewNotResponse.length)
        listReviewNotResponse.map((item, index) => {
            if (item !== listArrNew[index]) {
                listReview.push(item)
            }
        })
    }

    function unique(arr) {
        let list
        let newArr = []

        for (let i = 0; i <= arr.length; i++) {
            for (let j = i + 1; j <= arr.length; j++) {
                if (arr[i] === arr[j]) {
                    //  newArr.includes((item) => )
                }
            }
        }
        // return list
        // var newArr = []
        // for (var i = 0; i < arr.length; i++) {
        //     if (!newArr.includes(arr[i])) {
        //         newArr.push(arr[i])
        //     }
        // }
        // return newArr
    }
    console.log(unique([1, 1, 2, 3, 2]))
    return res.status(200).json(listReviewNotResponse)
}

const checkArr = (arr, size) => {
    for (let i = 0; i < size - 1; i++) {
        for (let j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                break
            }
            else {
                break
            }

        }
    }
}

module.exports = {
    handlePostReview: handlePostReview,
    handleShowReview: handleShowReview,
    handleInfoReviewNotResponse: handleInfoReviewNotResponse
}