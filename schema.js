import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        last_name: String
        company: String
        email: String
    }
    type Query {
        client: Client
    }
    input InputClient {
        id: ID
        name: String!
        last_name: String!
        company: String!
        email: String!
    }
    type Mutation {
        createClient(input: InputClient) : Client
    }
`); 

export default schema; 