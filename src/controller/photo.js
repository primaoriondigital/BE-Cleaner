const { response } = require("../middleware/common");
const ModelPhoto = require("../model/photo")

const PhotoController = {
    photoBefore: async (req,res,next) => {
        const {
            photo: [photo],
          } = req.files;
          req.body.photo = photo.path;
        const data = {
            order_id: req.body.order_id,
            status: 'before',
            photo: photo.path
        }
        const result = ModelPhoto.uploadPhoto(data)
        try {
            response(res,200,true,{data,result},"upload photo success")
        } catch (error) {
            response(res, 404, false, error, "upload photo fail")
        }
    },photoAfter: async (req,res,next) => {
        const {
            photo: [photo],
          } = req.files;
          req.body.photo = photo.path;
        const data = {
            order_id: req.body.order_id,
            status: 'after',
            photo: photo.path
        }
        const result = ModelPhoto.uploadPhoto(data)
        try {
            response(res,200,true,{data,result},"upload photo success")
        } catch (error) {
            response(res, 404, false, error, "upload photo fail")
        }
    }
}

exports.PhotoController = PhotoController