import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    business: String,
    date: String,
    warehouse: String,
    priceBook: {
      type: Number,
      enum: [2, 6],
      default: 6
    },
    loan:{type: Boolean, default: true},
    payFull: {type: Boolean, default: true},
    product: {
      type: String,
      enum: ["Stove", "Filter", "Entrepreneur Filter"],
      default: "Filter"
    },
    customer: {
      name: String,
      address: String,
      phoneNumber: String,
      deposit: String,
      peopleInHouse: String,
    },
    quantity: String,
  },

  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export { Job };
