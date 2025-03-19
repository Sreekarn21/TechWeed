import { authenticate } from "../../middleware/auth";

export default function handler(req, res) {
  authenticate(req, res, () => {
    res.status(200).json({ message: `Hello, ${req.user.name}!`, role: req.user.role });
  });
}
