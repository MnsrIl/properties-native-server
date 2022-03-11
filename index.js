const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const { PORT, MONGO_URI } = require("./utils/constants");

app.use(express.json());
app.use(cors());
app.use("/api", routes);

const start = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        app.listen(PORT, () => console.log("Everything started on http://localhost:" + PORT))
    } catch (e) {
        console.error(e);
        process.exit(0);
    }
}

start().then();
