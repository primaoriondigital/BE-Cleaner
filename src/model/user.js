const Pool = require("./../config/db");

const findName = (phone) => {
    return new Promise ((resolve,reject)=>
        Pool.query(`SELECT * FROM "user" where phone = '${phone}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    }))
}

const findAll = () => {
    return new Promise ((resolve,reject)=>
        Pool.query(`SELECT * FROM "user"`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    }))
}


const addUser = (data) => {
    const {id,name,phone,role,password,email,date_birth,photo_user,review_status,domisili,address} = data
    return new Promise((resolve, reject) => {
        Pool.query(`INSERT INTO "user" (id,name,password,phone,role,email,date_birth,photo_user,review_status,domisili,address) VALUES('${id}','${name}','${password}',${phone},'cleaner','${email}','${date_birth}','${photo_user}','on review','${domisili}','${address}')`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const addUser1 = (data) => {
    const {nama,nomor_telp,email,tempat_tgl,nik,alamat} = data
    return new Promise((resolve, reject) => {
        Pool.query(`INSERT INTO "signup_cleaner" (nama,nomor_telp,email,tempat_tgl,nik,alamat) VALUES('${nama}',${nomor_telp},'${email}','${tempat_tgl}','${nik}','${alamat}')`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const Rating = (id) => {
    // const {id,name,phone,role,password,email,date_birth,photo_user,review_status,domisili,address} = data
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT AVG(rating)::numeric(10,1) FROM "order" WHERE cleaner_id='${id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const findId = (id) => {
    return new Promise ((resolve,reject)=>
        Pool.query(`SELECT * FROM "user" where id = '${id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    }))
}

const inputId = (data) => {
    const {url,nik} = data
    return new Promise ((resolve,reject)=>
    Pool.query(`UPDATE "signup_cleaner" SET photo_ktp='${url}' WHERE nik='${nik}'`,(err,result)=>{
        if(!err){
            resolve(result)
        } else {
            reject(err)
        }
}))
}

module.exports = {findName,addUser,Rating,findAll,findId,addUser1,inputId}