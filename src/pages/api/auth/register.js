import dbConnect from "../../../lib/mongodb";  
import User from "../../../models/User";
import bcrypt from "bcryptjs";


export default async function handler(req, res) {
  await dbConnect(); // Ensure DB connection

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
