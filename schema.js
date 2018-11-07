exports.typeDefs = `
    type Shot {
        _id: ID
        name: String! 
        image: String!
        largeImage: String!
        description: String!
        createDate: String
        likes: Int
        username: String
        fullname: String
    }

    type User {
        _id: ID
        username: String! @unique
        password: String!
        email: String!
        fullname: String!
        joinDate: String!
        favorites: [Shot!]!
    }

    type Query {
        getAllShots: [Shot]
        getShot(_id: ID!): Shot
        searchShots(searchTerm: String) : [Shot]
        getCurrentUser: User
        getUserShots(username: String!) : [Shot]
    }

    type Token {
        token: String!
    }


    type Mutation {
        addShot(
            name: String!,
            image: String!,
            largeImage: String!,
            description: String!, 
            username: String
            fullname: String
        ) : Shot

        deleteUserShot(_id: ID) : Shot

        likeShot(_id: ID!, username: String!) : Shot
        unlikeShot(_id: ID!, username: String!) : Shot

        signinUser(
            username: String!,
            password: String!
        ) : Token

        signupUser(
            username: String!, 
            email: String!, 
            password: String!
            fullname: String!
        ) : Token
    }
`;
