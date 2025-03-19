import User from "../../../models/User";
import connectDB from "../../../lib/mongodb";
import authMiddleware from "../../../middleware/auth";


import Course from "../../../models/Course";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  await connectDB();

  const { email } = req.query; // Get user email from query params

  try {
    const user = await User.findOne({ email }).populate("courses");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ courses: user.courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
