import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing"
            });
        }

        const parts = authHeader.split(" ");
        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).json({
                success: false,
                message: "Invalid token format"
            });
        }

        const token = parts[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        try {
            // ❌ No user (auth middleware missing or failed)
            if (!req.user || !req.user.role) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }

            const userRole = req.user.role;

            // ❌ Role not allowed
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({
                    success: false,
                    message: "Access denied"
                });
            }

            // ✅ Allowed
            next();

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Server error"
            });
        }
    };
};

export  {authorizeRoles , validateJWT}