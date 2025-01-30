const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User=require("./models/signupSchema")
const jwt = require("jsonwebtoken");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.log("MongoDB Connection Unsuccessful", err));


const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});




const verifyToken = (req, res, next) => {
  console.log("Middleware triggered");
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Access Denied" });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid Token" });
  }
};


app.get("/", (req, res) => {
  res.send("Welcome to the Backend! 🚀");
});


app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ message: "Signup successful", signupStatus: true });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Signup Failed", signupStatus: false });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Credentials", isLoggedIn: false });
    }


    const token = jwt.sign(
      { email: existingUser.email, username: existingUser.username },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login Successful",
      isLoggedIn: true,
      token: token,
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Login Failed" });
  }
});
app.get("/json", verifyToken, (req, res) => {
  res.json({ message: "Middleware Check Passed", user: req.user.username });
});

app.get("/getsignupdet", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
