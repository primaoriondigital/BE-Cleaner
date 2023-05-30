const { response } = require("../middleware/common");
const bcrypt = require('bcryptjs');
const {v4: uuidv4} = require('uuid');
const {generateToken} = require('../middleware/auth')
const ModelUser = require("../model/user")

const UsersController = {
    register: async (req,res,next) => {
    let data = {
        id : uuidv4(),
        name : req.body.name,
        password : bcrypt.hashSync(req.body.password),
        phone : req.body.phone,
        role : req.body.role,
        email : req.body.email,
        date_birth : req.body.date_birth || null,
        photo_user : req.body.photo_user,
        review_status : req.body.review_status,
        address : req.body.address,
        domisili : req.body.domisili
        
    }
    try {
        const result = await ModelUser.addUser(data)
        if (result){
            console.log(result)
            response(res,200,true,true,"register success")
        }
    } catch (err){
        console.log(err)
        response(res,404,false,err,"register fail")
    }
    },register1: async (req,res,next) => {
        let data = {
            nama : req.body.nama,
            nomor_telp : req.body.nomor_telp,
            email : req.body.email,
            tempat_tgl : req.body.tempat_tgl,
            kendaraan : req.body.kendaraan,
            alamat : req.body.alamat,
            nik: req.body.nik            
        }
        try {
            const result = await ModelUser.addUser1(data)
            if (result){
                console.log(result)
                response(res,200,true,data,"signup cleaner success")
            }
        } catch (err){
            console.log(err)
            response(res,404,false,err,"signup cleaner fail")
        }
        },
    login: async (req,res,next)=>{
        try {
            console.log('phone',req.body.phone)
            console.log('password',req.body.password)
            let {rows:[user]} = await ModelUser.findName(req.body.phone)
            if(!user){
                return response(res, 404, false, null," phone number not found")
            }
            const password = req.body.password
            const validation1 = bcrypt.compareSync(password,user.password)
            if(!validation1){
                return response(res, 404, false, null,"wrong password")
            }
            delete user.password
            let payload = {
                id: user.id,
                fullname: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone
            }
            user.token = generateToken(payload)
            response(res, 200, true, user,"login success")
        
        } catch (error) {
            response(res, 404, false, error,"login fail")
        }
        

    }, getRating: async (req,res,next) => {
        const result = await ModelUser.Rating(req.params.id)
        try {
            response(res, 200, true, result.rows,"get rating success")
        } catch (error) {
            response(res, 404, false, error,"get rating fail")
        }
    }, getAll: async (req,res,next) => {
        const result = await ModelUser.findAll()
        try {
            response(res, 200, true, result.rows,"get all cleaner success")
        } catch (error) {
            response(res, 404, false, error,"get all cleaner fail")
        }
    }, getId: async (req,res,next) => {
        const result = await ModelUser.findId(req.params.id)
        try {
            response(res,200,true,result.rows,"get cleaner detail success")
        } catch (error) {
            response(res, 404, false, error, "get cleaner detail fail")
        }
    }, putId: async (req,res,next) => {
        let data = {
            nik: req.params.id,
            url: req.body.url
        }
        const result = await ModelUser.inputId(data)
        try {
            response(res,200,true,result,"update id success")
        } catch (error) {
            response(res, 404, false, error, "update id fail")
        }
    }
}

exports.UsersController = UsersController;
