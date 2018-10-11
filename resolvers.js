const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllShots: async (root, args, { Shot }) => {
      const allShots = await Shot.find().sort({
        createdDate: "desc"
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
    addShot: async (root, { name, description, username }, { Shot }) => {
      const newShot = await new Shot({
        name,
        description,
        username
      }).save();
      return newShot;
    },
    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },

    signupUser: async (root, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};
