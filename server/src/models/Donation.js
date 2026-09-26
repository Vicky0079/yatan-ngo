import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    pan: { type: String },
    address: { type: String },
    amount: { type: Number, required: true },
    frequency: { type: String, default: "one-time" },
    program: { type: String },
    message: { type: String },
    // Payment fields
    paymentMethod: { type: String }, // card / upi / netbanking
    transactionId: { type: String },
    status: { type: String, default: "pending" }, // pending / success / failed
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
