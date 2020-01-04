import express from 'express';
// graphQL 
import graphqlHTTP from 'express-graphql';
import schema from './schema';
const app = express();

app.get('/', (req, res) => {
    res.send("app ready for action!");
});

// resolver 
const root = {hello: () => "Hello word from GraphQL"}

app.use('/graphql', graphqlHTTP({
    // schema use for this url 
    schema,
    // The resolver is passed as rootValue 
    rootValue: root,
    // use graphiql
    graphiql: true 
}));

app.listen(8000, () => console.log("The server is online in port 8000"));