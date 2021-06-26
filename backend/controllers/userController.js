const User = require("../models/UserModel");

const userController = {
  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res
          .status(400)
          .json({ err: "Please LogIn or try again later!" });
      }
      const user = await User.findById(id);
      if (!user) {
        return res.status(400).json({ err: "No user found!" });
      }
      return res.status(200).json(user);
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ err: "Internal server error while fetching User data" });
    }
  },
};

module.exports = userController;
