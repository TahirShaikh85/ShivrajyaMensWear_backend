const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

app.use(express.json());

// cors policy
app.use(cors({
    origin:"http://localhost:5174",
    methods:"GET, POST,PUT,DELETE ",
    credentials:true
}));

// connect mongodb
require('./database/db')();


app.use('/api', require('./routes/router'));

app.listen(PORT, () => {
    console.log(`Server started http://localhost:${PORT}`)
})