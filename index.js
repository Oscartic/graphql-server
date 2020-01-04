import express from 'express';
// graphQL 
import graphqlHTTP from 'express-graphql';
import schema from './schema';
const app = express();

app.get('/', (req, res) => {
    res.send("app ready for action!");
});

class Client {
    constructor(id, {name, last_name, company, email}){
        this.id = id;
        this.name = name; 
        this.last_name = last_name;
        this.company = company;
        this.email = email;
    }
}

const clientsDB = {}

// resolver 
const root = {
    client: () => {
        return {
            "id": 464354545,
            "name": "Oscar ",
            "last_name": "Ballesteros",
            "company": "ORB",
            "email":  "oscar@mail.com",
        }
    },
    createClient: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientsDB[id] = input;
        return new Client(id, input);
    }
}

app.use('/graphql', graphqlHTTP({
    // schema use for this url 
    schema,
    // The resolver is passed as rootValue 
    rootValue: root,
    // use graphiql
    graphiql: true 
}));

app.listen(8000, () => console.log("The server is online in port 8000"));