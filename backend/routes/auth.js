const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "qwert";

// CREATE A USER USING POST "API/AUTH"
router.post(
  "/createUser",
  [
    body("name", "Name length must be more than 2 characters").isLength({ min: 2, }),
    body("email", "Invalid EmaIl").isEmail(),
    body("password", "Password must be atleast 3 characters").isLength({ min: 3, }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // CHECK WHETHER USER EXISTS OR NOT
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Email id already registered..!" });
      }

      const salt = await bycrypt.genSalt(10);
      const secPass = await bycrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({authToken});

    } catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occoured");
    }
  }
);

module.exports = router;