import db from '../models/index'
import reviewService from '../services/reviewService'

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

module.exports = {
    handlePostReview: handlePostReview,
    handleShowReview: handleShowReview
}