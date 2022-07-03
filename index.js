const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

dotenv.config()

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("DBConnection Successfull...")).catch((err) => {
    console.log("Database Not Connected..")
});
app.use(express.json())
app.use("/api/auth", authRoute)
// app.use("/api/user", userRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend Server is Running...")
})