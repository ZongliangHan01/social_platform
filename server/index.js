const express = require('express'); 
const app = express();
 // make api calls, initialize database, etc.

const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Post');
app.use("/post", postRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
});

 

