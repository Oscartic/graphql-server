import express from 'express';
// graphQL 
import graphqlHTTP from 'express-graphql';
import schema from './schema';
// resolvers
import resolvers from './resolvers'; 

const root = resolvers;
const app = express();

app.get('/', (req, res) => {
    res.send("app ready for action!");
});

app.use('/graphql', graphqlHTTP({
    // schema use for this url 
    schema,
    // The resolver is passed as rootValue 
    rootValue: root,
    // use graphiql
    graphiql: true 
}));

app.listen(8000, () => console.log("The server is online in port 8000"));