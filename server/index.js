const express = require('express');
const firstapp = express();

firstapp.get('/',(req,res) => {
    res.send({hi: 'there'});
});

//getting port number from environment variables
//Heroku stores the PORT env variable 
//if env variable not there pick 4000 as port number
const PORT =  process.env.PORT || 4000
firstapp.listen(4000);
