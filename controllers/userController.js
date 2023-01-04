const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate } = require("../models/user");

const addUser = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email }, "email").exec();
  if (user) return res.status(400).send("user exists");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt
    .hash(
      req.body.password,
      salt
    )(await user)
    .save();
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["name", "email", "password"]));
};

module.exports = {
    addUser
}
