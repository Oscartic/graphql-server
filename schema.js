import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID
        name: String
        last_name: String
        company: String
        emails: [Email]
        age: Int
        type: ClientType
        orders: [Order]
    }
    type Email {
        email: String
    }
    type Order {
        product: String
        price: Int
    }
    enum ClientType {
        BASIC
        PREMIUM
    }
    type Query {
        getClient(id: ID) : Client
    }
    input InputEmail {
        email: String
    }
    input InputOrder {
        product: String
        price: Int
    }
    """ fields for new client """
    input InputClient {
        id: ID
        name: String!
        last_name: String!
        company: String!
        emails: [InputEmail]
        age: Int
        type: ClientType!
        orders: [InputOrder]
    }
    """ Create Clients Mutations """ 
    type Mutation {
        # Nombre del Resolver, Input con Datos y valor que retorna
        """ Create new client """
        createClient(input: InputClient) : Client
    }
`); 

export default schema; 

/* 
TIPOS DE DATOS EN GraphQL 
int, float, string, id(número único), boolean
*/