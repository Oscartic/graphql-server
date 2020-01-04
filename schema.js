import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Client {
        id: ID,
        name: String,
        last_name: String,
        company: String,
        emails: [Email] 
    }
    type Email {
        email: String, 
    }
    type Query {
        client: Client
    }
`); 

export default schema; 