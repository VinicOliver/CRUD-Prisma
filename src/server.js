const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router);

app.listen(3300, () => {
    console.log('Server running at port 3300');
});