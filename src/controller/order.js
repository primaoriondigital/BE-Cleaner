const { response } = require("../middleware/common");
const ModelOrder = require("../model/order")

const OrderController = {
    getUrgent: async(req,res,next) => {
        const result = await ModelOrder.getOrderUrgent()
        try {
           
            response(res,200,true,result.rows,"register success")
        } catch (error) {
            response(res,404,false,error,"register fail")
        }
    }, getCleaner: async (req,res,next) => {
        const data = {
            id : req.params.id,
            order_id: req.body.order_id
        }
        try {
            const result = await ModelOrder.writeCleaner(data)
            response(res,200,true,data,"get cleaner success")
        } catch (error) {
            response(res,404,false,error,"get cleaner fail")
        }
    }, approvedArea: async(req,res,next) => {
            const result = await ModelOrder.writeApprovedArea(req.params.order_id)
        try {
            response(res,200,true,result.command,"approved area success")
        } catch (error) {
            response(res,404,false,error,"approved area fail")

        }
    }, orderOngoing: async(req,res,next) => {
        const result = await ModelOrder.writeOrderOngoing(req.params.order_id)
    try {
        response(res,200,true,result.command,"order on going success")
    } catch (error) {
        response(res,404,false,error,"order on going fail")

    }
    }, getHistory: async (req,res,next) => {
        const result = await ModelOrder.getOrderHistory(req.params.id)
        try {
            response(res,200,true,result.rows,"order history success")
        } catch (error) {
            response(res,404,false,error,"order history fail")
        }
    }, getBooking: async(req,res,next) => {
        const result = await ModelOrder.getOrderBooking()
        try {
           
            response(res,200,true,result.rows,"get booking success")
        } catch (error) {
            response(res,404,false,error,"get booking fail")
        }
    },cleanerArive: async(req,res,next) => {
        const result = await ModelOrder.getCleanerArive(req.params.order_id)
        try {
            response(res,200,true,result.command,"get cleaner arive success")
        } catch (error) {
            response(res,404,false,error,"get cleaner arive fail")
        }
    },getBookedOrder: async(req,res,next) => {
        const result = await ModelOrder.getBookedOrderNow(req.params.id)
        try {            
            response(res,200,true,result.rows,"get booked order success")
        } catch (error) {
            response(res,404,false,error,"get booked order fail")
        }
    },getOrderDone: async(req,res,next) => {
        const result = await ModelOrder.getOrderStatusDone()
        try {            
            response(res,200,true,result.rows,"get booked order success")
        } catch (error) {
            response(res,404,false,error,"get booked order fail")
        }
    },getOrderOngoing: async(req,res,next) => {
        const result = await ModelOrder.getOrderStatusOngoing()
        try {            
            response(res,200,true,result.rows,"get booked order success")
        } catch (error) {
            response(res,404,false,error,"get booked order fail")
        }
    },getByNik: async(req,res,next) => {
        const result = await ModelOrder.getOrderByNik()
        try {            
            response(res,200,true,result.rows,"get order success")
        } catch (error) {
            response(res,404,false,error,"get order fail")
        }
    }
}

exports.OrderController = OrderController