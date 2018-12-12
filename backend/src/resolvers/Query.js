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

module.exports = {
  shots,
  shot,
  user,
  getCurrentUser
};
