const { response } = require("../middleware/common");
const ModelPhoto = require("../model/photo")

const PhotoController = {
    photoBefore: async (req,res,next) => {
        const now = new Date();
        const date = now.toLocaleDateString()
        const time = now.toLocaleTimeString()
        const data = {
            order_id: req.body.order_id,
            status: 'before',
            photo: req.body.photo,
            date: `${date} ${time}`
        }
        const result = ModelPhoto.uploadPhoto(data)
        try {
            response(res,200,true,{data,result},"upload photo success")
        } catch (error) {
            response(res, 404, false, error, "upload photo fail")
        }
    },photoAfter: async (req,res,next) => {
        const data = {
            order_id: req.body.order_id,
            status: 'after',
            photo: req.body.photo
        }
        const result = ModelPhoto.uploadPhoto(data)
        try {
            response(res,200,true,{data,result},"upload photo success")
        } catch (error) {
            response(res, 404, false, error, "upload photo fail")
        }
    },getPhoto: async (req,res,next) => {
        const data = {
            order: req.params.order,
            status: req.params.status
        }
        try {
            const result = await ModelPhoto.getPhoto(data)
            response(res,200,true,result.rows,"upload photo success")
        } catch (error) {
            response(res, 404, false, error, "upload photo fail")
        }
    }
}

exports.PhotoController = PhotoController