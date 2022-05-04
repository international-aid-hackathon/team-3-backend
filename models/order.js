import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const orderSchema = new Schema({
    id: String,
    entrepreneur_id: String,
    customer_id: String,
    date: Date.now,
    currency: String,
    total_price: Number,
    amount_paid: Number,
    product_id: String,
    full_pay: Boolean,
    loan_id: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref:"Profile"}
})


const Order = mongoose.model('Order', orderSchema);

export {Order}