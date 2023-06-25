const express = require('express');
const apiRoutes = require('./controller');
const {Sequelize,connectToDB} = require('./db');


const {response, application} = require('express');

// middleware
const app = express();

// passing json
app.use(express.json());

// url routing to work use the api in your url
 app.use('/api',apiRoutes);





const PORT = 5000;
app.listen(PORT, async() => {
 console.log(`server running at http://localhost:${PORT}`); 
  await connectToDB();
})