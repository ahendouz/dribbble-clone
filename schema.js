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
        userImg: String
    }

    type Skill {
        url: String
    }
    type ElseWhere {
        url: String
    }
    type User {
        _id: ID
        username: String! @unique
        password: String!
        email: String!
        fullname: String!
        joinDate: String!
        favorites: [Shot!]!
        userImg: String,
        skills: [Skill]
        biography: String
        elseWhere: [ElseWhere]
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
            userImg: String
        ) : Shot

        deleteUserShot(_id: ID) : Shot

        updateUserShot(
            _id: ID
            name: String!,
            description: String!, 
        ) : Shot


        likeShot(_id: ID!, username: String!) : Shot
        unlikeShot(_id: ID!, username: String!) : Shot

        updateUser(
            _id: ID
            fullname: String!
            userImg: String!
        ) : User

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
