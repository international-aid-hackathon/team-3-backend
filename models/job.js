import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    //not sure
    users: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    quantity: String,
    date: String
},
{
    timestamps: true,
}
)


const Job = mongoose.model('Job', jobSchema)

export { Job }