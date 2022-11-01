import db from '../models/index'
import reviewService from '../services/reviewService'

const handlePostReview = async (req, res) => {
    try {
        if (req.body) {
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
        if (req.query.idProduct) {
            let idProduct = req.query.idProduct
            let data = await db.review.findAll({
                where: { Id_san_pham: idProduct },
                raw: true
            })
            if (data) {
                return res.status(200).json(data)
            }
            else {
                return res.status(400).json({
                    errCode: '1',
                    message: 'Không tìm thấy id sản phẩm'
                })
            }
        }
    } catch (e) { }
}

module.exports = {
    handlePostReview: handlePostReview,
    handleShowReview: handleShowReview
}