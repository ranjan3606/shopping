const router = require("express").Router();
const User = require("../models/User")
const CryptoJs = require("crypto-js")


//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC)
    });
    try {
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
        console.log(saveUser)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );
        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const password = await hashedPassword.toString(CryptoJS.enc.Utf8);
        password !== req.body.password && res.status(401).json("Wrong credentials!");

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router