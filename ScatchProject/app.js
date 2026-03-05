const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const expressSession = require('express-session');
const flash = require('connect-flash');

const indexRouter = require("./routes/index.js")
const ownerRouter = require("./routes/ownerRouter.js");
const userRouter = require("./routes/userRouter.js");
const productRouter = require("./routes/productRouter.js");


require("dotenv").config();

const db = require("./config/mongooseConnection.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.use(expressSession({
    saveUninitialized: false,
    resave: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
}));

app.use(flash());

app.use("/", indexRouter);
app.use("/owner", ownerRouter);
app.use("/products", productRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
})
