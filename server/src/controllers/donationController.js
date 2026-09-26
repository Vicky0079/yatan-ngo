import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  const { donorName, email, amount, paymentMethod, transactionId, status } =
    req.body;

  if (!donorName || !email || !amount) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const donation = await Donation.create({
    ...req.body,
    paymentMethod: paymentMethod || "card",
    transactionId: transactionId || "mock_" + Date.now(),
    status: status || "success",
  });

  res.status(201).json({
    message: "Donation recorded successfully",
    donation,
    receiptId: "YTN-" + donation._id.toString().slice(-8).toUpperCase(),
  });
};

export const getDonations = async (req, res) => {
  const donations = await Donation.find().sort({ createdAt: -1 });
  res.json(donations);
};
