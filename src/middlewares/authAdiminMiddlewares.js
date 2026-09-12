async function authAdminMiddleware(req, res, next) {
    if (!req.user || req.user.role != "Admin") {
        return res.status(403).json({
            massege: "Access denied"
        })
        next();
    }

}

export default authAdminMiddleware;