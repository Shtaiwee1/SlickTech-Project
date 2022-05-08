const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.index = (req, res) => {
  res.json("Hello World");
};

module.exports.register = async (req, res) => {
  const users = await User.find({});

  const { firstName, lastName, email, address, password, confirmPassword } =
    req.body;

  let imageFile = "";
  if (req.file) {
    imageFile = req.file.filename;
  }

  if (users.length === 0) {
    User.create({
      firstName,
      lastName,
      email,
      address,
      password,
      confirmPassword,
      image: imageFile,
      isAdmin: true,
    })
      .then((user) => {
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          "RKCFBuTGXi"
        );

        res
          .cookie("usertoken", userToken, {
            httpOnly: true,
          })
          .json({ msg: "success!", user: user });
      })
      .catch((err) => res.status(400).json(err));
  } else {
    User.create({
      firstName,
      lastName,
      email,
      address,
      password,
      confirmPassword,
      image: imageFile,
    })
      .then((user) => {
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          "RKCFBuTGXi"
        );

        res
          .cookie("usertoken", userToken, {
            httpOnly: true,
          })
          .json({ msg: "success!", user: user });
      })
      .catch((err) => res.status(400).json(err));
  }
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    return res.sendStatus(400);
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!correctPassword) {
    return res.sendStatus(400);
  }

  const userToken = jwt.sign(
    {
      id: user._id,
    },
    "RKCFBuTGXi"
  );

  res
    .cookie("usertoken", userToken, {
      httpOnly: true,
    })
    .json({ msg: "success!" });
};

module.exports.logout = (req, res) => {
  res.clearCookie("usertoken");
  res.sendStatus(200);
};

module.exports.checkLogIn = async (req, res) => {
  if ("usertoken" in req.cookies) {
    const { id } = jwt.verify(req.cookies.usertoken, "RKCFBuTGXi");
    const { firstName, lastName, isAdmin } = await User.findOne({ _id: id });
    res.json({ firstName, lastName, isAdmin });
  } else {
    res.json({});
  }
};
