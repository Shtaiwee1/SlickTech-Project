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

module.exports.updateUser = (req, res) => {
  const { id } = jwt.verify(req.cookies.usertoken, "RKCFBuTGXi");
  const { firstName, lastName, email, address } = req.body;
  console.log(id);
  console.log(req.body);
  let imageFile = "";
  if (req.file) {
    imageFile = req.file.filename;
  }
  User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      firstName,
      lastName,
      email,
      address,
      image: imageFile,
    },
    { new: true, runValidators: true }
  )
    .then((updatedUser) => res.json({ updatedUser, msg: "Update Successful!" }))
    .catch((err) => res.status(400).send(err));
};

module.exports.logout = (req, res) => {
  res.clearCookie("usertoken");
  res.sendStatus(200);
};

module.exports.checkLogIn = async (req, res) => {
  if ("usertoken" in req.cookies) {
    const { id } = jwt.verify(req.cookies.usertoken, "RKCFBuTGXi");
    const { firstName, lastName, email, address, image, isAdmin } =
      await User.findOne({ _id: id });
    res.json({ firstName, lastName, email, address, isAdmin, image });
  } else {
    res.json({});
  }
};

module.exports.addToCart = async (req, res) => {
  const { productId, count } = req.body;
  const { id } = jwt.verify(req.cookies.usertoken, "RKCFBuTGXi");
  const numProduct = [];
  for (var i = 0; i < count; i++) {
    numProduct.push(productId);
  }
  User.findOneAndUpdate(
    {
      _id: id,
    },
    { $push: { cart: { $each: numProduct } } },
    { new: true, runValidators: true }
  )
    .then((updatedUser) => res.json(updatedUser))
    .catch((err) => res.status(400).send(err));
};

module.exports.getCart = async (req, res) => {
  const { id } = jwt.verify(req.cookies.usertoken, "RKCFBuTGXi");
  User.findOne({ _id: id })
    .populate("cart")
    .then((user) => res.json(user.cart))
    .catch((err) => res.status(400).send(err));
};
