const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  fullname: { type: String, required: true },
  joinDate: { type: Date, default: Date.now },
  favorites: [{ type: Schema.Types.ObjectId, ref: "Shot" }],
  userImg: { type: String, required: true },
  skills: [{ type: String }],
  biography: { type: String },
  elseWhere: [{ type: String }]
});

// before any user save to the database we goining to excute this function
UserSchema.pre("save", function(next) {
  // if the password Field on our schema is not modified we want to return next
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
