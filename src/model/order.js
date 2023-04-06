const Pool = require("./../config/db");
const getOrderUrgent = () => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" where order_status = 'Open'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    })
})
}

const getOrderBooking = () => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" where order_status = 'Ready to Book'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    })
})
}

const writeCleaner = (data) => {
    const {order_id,id} = data
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='get cleaner',cleaner_id='${id}' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const writeApprovedArea = (order_id) => {
    // const {order_id,id} = data
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='approved area' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const writeOrderOngoing = (order_id) => {
    // const {order_id,id} = data
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='Order on Going' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const getOrderHistory = (id) => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" where cleaner_id = '${id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    })
})
}

const getCleanerArive = (order_id) => {
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='cleaner arive' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const getBookedOrderNow = (id) => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" WHERE order_status='get cleaner' AND cleaner_id='${id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const getOrderStatusDone = () => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" where order_status = 'Done'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    })
})
}

const getOrderStatusOngoing = () => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" WHERE order_status NOT IN ('Done','waiting for payment','Ready to Book','Open','Cancel') `,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    })
})
}
module.exports = {getOrderStatusOngoing,getOrderUrgent,writeCleaner,writeApprovedArea,writeOrderOngoing,getOrderHistory,getOrderBooking,getCleanerArive,getBookedOrderNow,getOrderStatusDone}