import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const contact = await Contact.create(req.body);
  res.status(201).json({ message: "Message received. We will get back soon.", contact });
};
