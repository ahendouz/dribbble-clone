const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (user, secret, duration) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn: duration });
};

exports.resolvers = {
  Query: {
    getAllShots: async (root, args, { Shot }) => {
      const allShots = await Shot.find().sort({
        createdDate: "desc"
        // createdDate: "esc"
      });
      return allShots;
    },

    getShot: async (root, { _id }, { Shot }) => {
      const shot = await Shot.findOne({ _id });
      return shot;
    },

    searchShots: async (root, { searchTerm }, { Shot }) => {
      if (searchTerm) {
        const searchResults = await Shot.find(
          {
            $text: { $search: searchTerm }
          },
          {
            score: { $meta: "textScore" }
          }
        ).sort({
          score: { $meta: "textScore" }
        });
        return searchResults;
      } else {
        const shots = await Shot.find().sort({
          likes: "desc",
          createdDate: "desc"
        });
        return shots;
      }
    },

    getUserShots: async (root, { username }, { Shot }) => {
      const userShots = await Shot.find({ username }).sort({
        createdDate: "desc"
      });
      return userShots;
    },

    getCurrentUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        // find user in our database
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Shot"
      });
      return user;
    }
  },

  Mutation: {
    addShot: async (
      root,
      { name, image, largeImage, description, username, fullname },
      { Shot }
    ) => {
      const newShot = await new Shot({
        name,
        image,
        largeImage,
        description,
        username,
        fullname
      }).save();
      return newShot;
    },

    deleteUserShot: async (root, { _id }, { Shot }) => {
      const shot = await Shot.findOneAndRemove({ _id });
      return shot;
    },

    updateUserShot: async (root, { _id, name, description }, { Shot }) => {
      const updateUserShot = await Shot.findOneAndUpdate(
        { _id },
        { $set: { name, description } },
        { new: true }
      );
      return updateUserShot;
    },

    likeShot: async (root, { _id, username }, { Shot, User }) => {
      const shot = await Shot.findOneAndUpdate({ _id }, { $inc: { likes: 1 } });
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: _id } }
      );
      return shot;
    },

    unlikeShot: async (root, { _id, username }, { Shot, User }) => {
      const shot = await Shot.findOneAndUpdate(
        { _id },
        { $inc: { likes: -1 } }
      );
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: _id } } // pull will remove a giving id
      );
      return shot;
    },

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new Error(
          "We couldn’t find an account matching the username you entered. Please check your password and try again."
        );
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error(
          "We couldn’t find an account matching the password you entered. Please check your password and try again."
        );
      }
      return {
        token: createToken(user, process.env.SECRET, "7d")
      };
    },

    signupUser: async (
      root,
      { username, email, password, fullname },
      { User }
    ) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("Username has already been taken");
      }
      const newUser = await new User({
        username,
        email,
        password,
        fullname
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "7d") };
    }
  }
};
