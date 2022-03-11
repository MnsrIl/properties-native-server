require("dotenv").config();

const { SECRET_KEY, HASH_SALT, PORT = 5000, MONGO_URI } = process.env;

module.exports = { SECRET_KEY, HASH_SALT, PORT, MONGO_URI };
