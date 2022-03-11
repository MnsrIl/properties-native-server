const bcrypt = require("bcryptjs");
const { User } = require("../models/User.model");
const { generateNewToken } = require("../utils/helpers");
const { HASH_SALT } = require("../utils/constants");

module.exports.usersController = {
    signUp: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: "The email or password weren't provided" });
            }

            const candidate = await User.findOne({ email });

            if (candidate) {
                return res.status(403).json({ error: "The user with provided email already exists!" });
            }

            const hashedPassword = bcrypt.hashSync(password, Number(HASH_SALT));
            const newUser = await User.create({ email, password: hashedPassword });

            return res.status(201).json({ data: newUser._id });
        } catch (e) {
            return res.status(500).json({ error: "Internal Server Error! " + JSON.stringify(e) });
        }
    },

    signIn: async (req, res) => {
        console.log("signing in")
        try {
            const { password, email } = req.body;

            const candidate = await User.findOne({ email });

            if (!candidate) {
                return res.status(404).json({ error: "The user with provided email doesn't exist" });
            }

            console.log('ERROR ', candidate)

            const isPasswordValid = bcrypt.compareSync(password, candidate.password);

            if (!isPasswordValid) {
                return res.status(400).json({ error: "The user with provided email and password doesn't exist" });
            }
            console.log('ERROR signing')

            const token = generateNewToken({ id: candidate._id });

            return res.status(200).json({ data: token });
        } catch (e) {
            return res.status(500).json({ error: "Internal Server Error! " + JSON.stringify(e) });
        }
    },

    getUsers: async (req, res) => {
        try {
            const user = await User.find();

            return res.status(200).json({ data: user });
        } catch (e) {
            return res.status(500).json({ error: "Internal Server Error!" + JSON.stringify(e) });
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;

            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ error: "The user with provided ID doesn't exist" });
            }

            return res.status(200).json({ data: user });
        } catch (e) {
            return res.status(500).json({ error: "Internal Server Error!" + JSON.stringify(e) });
        }
    }
}
