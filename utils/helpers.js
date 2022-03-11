const { sign } = require("jsonwebtoken");
const { SECRET_KEY } = require("./constants");

const generateNewToken = ({ id }) => {
    const token = sign({id}, SECRET_KEY, { expiresIn: "72h" });
    const type = "Bearer";

    return `${type} ${token}`;
}

module.exports = { generateNewToken };
