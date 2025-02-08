import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { verifyToken } from "@/middleware/auth";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  await dbConnect();
  verifyToken(req, res, async () => {
    const user = await User.findById(req.user.userId).select("-password");
    res.status(200).json(user);
  });
}
