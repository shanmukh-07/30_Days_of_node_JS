const express = require('express');
const app = express();
// @param {Object} req 
// @param {Object} res

function greetHandler(req,res){
    const name = req.query.name;
    const greeting = name ? `Hello, ${name}!` : `Hello Guest!`;
    res.send(greeting);
}
app.get('/Day6',greetHandler);
app.listen(7777,()=>{
    console.log('Server is running on port 7777');
});