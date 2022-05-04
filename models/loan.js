import mongoose from 'mongoose'

const loanSchema = new mongoose.Schema({
  total: Number,
  paid: Number,
  last_payment_date: Date,
  users: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, 
)


const Loan = mongoose.model('Loan', loanSchema)

export { Loan }