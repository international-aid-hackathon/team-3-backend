import mongoose from 'mongoose'

const warehouseSchema = new mongoose.Schema({
  location: String,
  quantity: Number,
  product_id: {type: mongoose.Schema.Types.ObjectId, ref: "Product"}
}, 
)


const Warehouse = mongoose.model('Warehouse', warehouseSchema)

export { Warehouse }