import User from '@/models/User';

import connectDB from "../../../lib/mongodb";
import authMiddleware from "../../../middleware/auth";


export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method Not Allowed" });

  await connectDB();
  authenticate(req, res, async () => {
    const user = await User.findById(req.user.userId).select("-password");
    res.status(200).json(user);
  });
}
