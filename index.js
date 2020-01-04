import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("app ready for action!");
});

app.listen(8000, () => console.log("The server is online in port 8000"));