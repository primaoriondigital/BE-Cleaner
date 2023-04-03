const Pool = require("./../config/db");

const uploadPhoto = (data) => {
    const {order_id,photo,status} = data
    return new Promise ((resolve,reject)=>
        Pool.query(`INSERT INTO "photo" (order_id,url,status) VALUES ('${order_id}','${photo}','${status}')`,(err,result)=>{
            if(!err){
                resolve(result)
                console.log(data)
            } else {
                reject(err)
                console.log(data)
            }
    }))
}

module.exports = {uploadPhoto}