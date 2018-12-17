const { forwardTo } = require("prisma-binding");
const { getUserId } = require("../utils");

const shots = (root, args, context, info) => {
  return context.db.query.shots({}, info);
};

const shot = forwardTo("db");

const user = forwardTo("db");

// const likes = (root, args, context, info) => {
//   return context.db.query.likes({}, info);
// };

const getCurrentUser = (root, args, context, info) => {
  const userId = getUserId(context);
  if (userId) {
    return context.db.query.user(
      {
        where: { id: userId }
      },
      info
    );
  } else {
    return null;
  }
};
const isUserLikeShot = async (root, { shotId }, context, info) => {
  const userId = getUserId(context);
  const user = await context.db.query.user(
    { where: { id: userId } },
    `{favorites{shot{id}}}`
  );
  const isLiked = user.favorites
    .filter(favorite => favorite.shot.id === shotId)
    .map(favorite => favorite.shot.id)[0];
  if (isLiked) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  shots,
  shot,
  user,
  getCurrentUser,
  isUserLikeShot
};
