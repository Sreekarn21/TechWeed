import { authenticate } from "../../middleware/auth";
import { authorize } from "../../middleware/role";

export default function handler(req, res) {
  authenticate(req, res, () => {
    authorize("admin")(req, res, () => {
      res.status(200).json({ message: "Welcome, Admin!" });
    });
  });
}
