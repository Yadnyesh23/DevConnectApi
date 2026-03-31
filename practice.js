import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // ❌ No header
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing"
            });
        }

        // ❌ Wrong format
        const parts = authHeader.split(" ");
        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({
                success: false,
                message: "Invalid token format"
            });
        }

        const token = parts[1];

        // ❌ Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // ✅ Attach user
        req.user = decoded;

        // ✅ Move forward
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

export default validateJWT;