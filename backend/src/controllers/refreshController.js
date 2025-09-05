import jwt from "jsonwebtoken";
import User from "../models/Users.js";


const refreshAccessToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refreshToken) return res.status(401).json({ message: "No refresh token in cookies" });
  const refreshToken = cookies.refreshToken;
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid refresh token" });
        try {
            const user = await User.findById(decoded.id);
            if (!user || !user.refreshTokens.includes(refreshToken)) {
                return res.status(403).json({ message: "Refresh token not recognized" });
            }
            const newAccessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });
            res.status(200).json({ accessToken: newAccessToken });
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
}

export default refreshAccessToken;