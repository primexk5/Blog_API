const express = require('express');
const app = express();
require ("dotenv").config();
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoutes');



app.use(express.json());

const PORT = process.env.PORT;

app.use('/', userRoute);
app.use('/', postRoute);



app.listen(PORT, (res, err) => {
    if (err) {
        console.log(err);
    }else {
        console.log(`Server is running on port ${PORT}`);
    }
});