const User = {
  favorites: async (root, args, context, info) => {
    const countSelectionSet = ` {
      aggregate {
        count
      }
    }`;
    const totalFavoritesRes = await context.db.query.likesConnection(
      {
        where: { likedBy: { id: parent.id } }
      },
      info
    );
    console.log({ "🧐": totalFavoritesRes });
  }
};

module.exports = User;
