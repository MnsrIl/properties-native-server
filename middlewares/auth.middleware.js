const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils/constants");

module.exports = async (req, res, next) => {
    if (req.method === "OPTIONS") next();

    try {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ error: "Not authorized!" });
        }

        const [type, token] = authorization.split(" ");

        const isValidType = type === "Bearer";
        const isValidToken = await verify(token, SECRET_KEY);

        if (!isValidToken || !isValidType) {
            return res.status(400).json({ error: "Not authorized!" });
        }

        req.user = isValidToken;

        next();
    } catch (e) {
        res.status(403).json({ error: "Not authenticated" + e });
    }
}
