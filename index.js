import express from "express"
import rateLimiter from "./rateLimiter.js";
import dotevn from "dotenv";

const PORT = process.env.PORT || 3000;
dotevn.config();
const app = express();

// Use the rate limiting middleware
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", (req, res) => {
    res.send("This is the posts endpoint");
})

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})