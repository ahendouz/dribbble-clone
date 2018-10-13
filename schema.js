exports.typeDefs = `
    type Shot {
        _id: ID
        name: String! 
        description: String!
        createDate: String
        likes: Int
        username: String
    }

    type User {
        _id: ID
        username: String! @unique
        password: String!
        email: String!
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
            description: String!, 
            username: String
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
        ) : Token
    }
`;
