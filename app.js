const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("This is Smit Chawda's web application!"));

app.listen(port, ()=>{
    console.log(`Application started on http://localhost:${port}`);
});

