const express = require('express');
const app = express();
console.log("PAST THE REQUIRE");

const port = process.env.port || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Example app listening!'));
