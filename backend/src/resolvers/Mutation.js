const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId } = require("../utils");

// CREATE PART
const createShot = async (
  root,
  { title, description, image, largeImage, tags, colors },
  context,
  info
) => {
  const userId = getUserId(context);
  return context.db.mutation.createShot(
    {
      data: {
        title,
        description,
        image,
        largeImage,
        tags: { set: tags },
        colors: { set: colors },
        postedBy: { connect: { id: userId } }
      }
    },
    info
  );
};

// COMMENT A SHOT
const commentShot = async (root, { comment, shotId }, context, info) => {
  const userId = getUserId(context);
  return context.db.mutation.createComment(
    {
      data: {
        comment,
        shot: { connect: { id: shotId } },
        commentedBy: { connect: { id: userId } }
      }
    },
    info
  );
};

const likeUnlikeShot = async (root, { shotId }, context, info) => {
  // Get current user Id
  const userId = getUserId(context);

  // Get the user favorite => to see if he already liked the shot
  const user = await context.db.query.user(
    { where: { id: userId } },
    `{favorites{id shot{id}}}`
  );
  // Get shot likes
  const shot = await context.db.query.shot(
    { where: { id: shotId } },
    `{likes}`
  );

  // 2. Get the user favorites => to see if they already liked the shot || if yes then we will have likeId
  // if (currentUser already liked this shot) {likeId} else {undefined}
  const likeId = user.favorites
    .filter(favorite => favorite.shot.id === shotId)
    .map(likeId => likeId.id)[0];

  if (shot && likeId !== undefined) {
    console.log("UNLIKE");
    // 1. delete Like
    const unLikeShot = await context.db.mutation.deleteLike({
      where: { id: likeId }
    });
    // 2. update shot likes by -1
    await context.db.mutation.updateShot({
      where: { id: shotId },
      data: {
        likes: shot.likes - 1
      }
    });
    return unLikeShot;
  } else if ((shot && likeId == undefined) || !likeId) {
    console.log("LIKE");
    // 1. create Like
    const likeShot = await context.db.mutation.createLike({
      data: {
        likedBy: { connect: { id: userId } },
        shot: { connect: { id: shotId } }
      }
    });
    // 2. update shot likes by +1
    await context.db.mutation.updateShot({
      where: { id: shotId },
      data: {
        likes: shot.likes + 1
      }
    });
    return likeShot;
  }
};

// EDIT SHOT
const editShot = async (
  root,
  { id, title, description, tags },
  context,
  info
) => {
  const where = { id };
  //1. find the shot
  const shot = await context.db.query.shot({ where }, `{postedBy{id}}`);
  // console.log("☛☛☛☛☛", item);
  //2. check if the user own this shot
  const ownsShot = shot.postedBy.id === getUserId(context);

  if (ownsShot) {
    return context.db.mutation.updateShot({
      data: {
        title,
        description,
        tags: { set: tags }
      },
      where: { id }
    });
  } else {
    throw new Error("You don't own this shot to do edit it!");
  }
};

// DELETE SHOT
const deleteShot = async (root, { id }, context, info) => {
  const where = { id };
  // 1. find the shot
  const item = await context.db.query.shot(
    { where },
    `{id title postedBy{id}}`
  );

  // 2. check if the user own this shot
  const ownsShot = item.postedBy.id === getUserId(context);

  if (ownsShot) {
    return await context.db.mutation.deleteShot({ where }, info);
  } else {
    throw new Error("You don't own this shot to do delete it!");
  }

  // console.log("🌝🌝🌝🌝🌝🌝🌝", getUserId(context));
  // console.log("🌚🌚🌚🌚🌚🌚🌚", item.postedBy.id);
};

// AUTHENTICATION PART
const signup = async (parent, args, context, info) => {
  // encrypting the User’s password using the bcryptjs library
  const password = await bcrypt.hash(args.password, 10);

  // store the new User in the database
  const user = await context.db.mutation.createUser(
    {
      data: { ...args, password }
    },
    `{ id }`
  );

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  return {
    token,
    user
  };
};

const signin = async (root, { username, password }, context, info) => {
  const user = await context.db.query.user(
    { where: { username } },
    ` { id password } `
  );
  if (!user) {
    throw new Error(
      "We couldn’t find an account matching the username you entered. Please check your username and password and try again."
    );
  }

  // 2
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error(
      "We couldn’t find an account matching the password you entered. Please check your password and try again."
    );
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  // 3
  return {
    token,
    user
  };
};

// DELETE USER
const deleteUser = async (root, { id }, context, info) => {
  const where = { id };
  // 1. find the user
  const user = await context.db.query.user({ where }, `{id fullname}`);

  //2. check if the user own the account
  const ownsAccount = user.id === getUserId(context);

  // console.log(user);

  if (ownsAccount) {
    return await context.db.mutation.deleteUser({ where }, info);
  } else {
    throw new Error(`You are not ${user.fullname}!!`);
  }
};

// EDIT USER
const editUser = async (
  root,
  { id, fullname, bio, profileImage, skills, location },
  context,
  info
) => {
  //1. check if the the user own this account
  const ownsAccount = id === getUserId(context);

  if (ownsAccount) {
    return context.db.mutation.updateUser(
      {
        data: {
          fullname,
          bio,
          profileImage,
          skills: { set: skills },
          location
        },
        where: { id }
      },
      info
    );
  } else {
    throw new Error("you don't own this account to delete it");
  }
};

module.exports = {
  signup,
  signin,
  createShot,
  // likeShot,
  // unLikeShot,
  likeUnlikeShot,
  commentShot,
  editShot,
  deleteShot,
  editUser,
  deleteUser
};
