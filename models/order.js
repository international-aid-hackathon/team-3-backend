import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    id: String,
    entrepreneur_id: String,
    customer_id: String,
    date: { type: Date, default: Date.now },
    currency: String,
    total_price: Number,
    amount_paid: Number,
    product_id: String,
    full_pay: Boolean,
    loan_id: String,
    warehouse_id: String,
    purchase_reasons: String,

})


const Order = mongoose.model('Order', orderSchema);

export {Order}