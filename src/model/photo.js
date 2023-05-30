const Pool = require("./../config/db");

const uploadPhoto = (data) => {
    const {order_id,photo,status} = data
    const now = new Date();
    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()
    return new Promise ((resolve,reject)=>
        Pool.query(`INSERT INTO "review2" (order_id,photo,status,date) VALUES ('${order_id}','${photo}','${status}','${date}_${time}')`,(err,result)=>{
            if(!err){
                resolve(result)
                console.log(data)
            } else {
                reject(err)
                console.log(data)
            }
    }))
}

const getPhoto = (data) => {
    const {order,status} = data
    return new Promise ((resolve,reject)=>
        Pool.query(`SELECT * FROM review2 where (order_id = '${order}' AND status = '${status}')`,(err,result)=>{
            if(!err){
                resolve(result)
                console.log(data)
            } else {
                reject(err)
                console.log(data)
            }
    }))
}
module.exports = {uploadPhoto,getPhoto}