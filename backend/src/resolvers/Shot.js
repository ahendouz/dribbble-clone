// const Shot = {
//   likes: async (parent, args, context, info) => {
//     const countSelectionSet = ` {
//       aggregate {
//         count
//       }
//     }`;
//     const totalLikesRes = await context.db.query.likesConnection(
//       { where: { shot: { id: parent.id } } },
//       countSelectionSet
//     );
//     const totalLikes = totalLikesRes.aggregate.count;
//     return totalLikes;
//     // console.log({ "💩": totalLikesRes });
//   }
// };
// module.exports = Shot;
