import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        last_name: String
        company: String
        email: String
        age: Int
        type: ClientType
    }
    enum ClientType {
        BASIC
        PREMIUM
    }
    type Query {
        getClient(id: ID) : Client
    }
    input InputClient {
        id: ID
        name: String!
        last_name: String!
        company: String!
        email: String!
        age: Int
        type: ClientType!
    }
    type Mutation {
        createClient(input: InputClient) : Client
    }
`); 

export default schema; 

/* 
TIPOS DE DATOS EN GraphQL 
int, float, string, id(número único), boolean
*/