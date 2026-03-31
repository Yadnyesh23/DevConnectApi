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

export default authorizeRoles;