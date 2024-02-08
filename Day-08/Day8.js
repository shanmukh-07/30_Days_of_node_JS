const express = require('express');
const app = express();

function positiveIntegerHandler(req,res){
    const par = req.query.number;
    if(isNaN(par) || parseInt(par) <= 0){
        res.status(400).send("Error: The Number is not a Positive Integer");
    }
    res.status(200).send(`Verified: The Number ${par} is a Positive Integer`);
}

app.use(positiveIntegerHandler);
app.get('/check');
const port = 7777;
app.listen(port,() => {
    console.log(`server is running on the port ${port}`);
})