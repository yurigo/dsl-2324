//

export const typeDefs = `
    type Query {
        todos: [Todo]
        todo(id: ID!): Todo
        users: [User]
        user(id: ID!): User
    }

    type Todo {
        id: ID!
        text: String
        done: Boolean
        user: User
    }

    type User {
        id: ID!
        email: String
        name: String
        enam: String
        todos: [Todo]
    }

`;
