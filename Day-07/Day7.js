const express = require('express');
const app = express();
function requestLoggerMiddleware(req,res,next){
    const currentTime = new Date();
    console.log(`${currentTime} ${req.method} request received.`);
    next();
}

app.use(requestLoggerMiddleware);
app.get('/',(req,res) => {
    res.send("Hello Everyone!");
});

app.listen(7777,()=>{
    console.log("Server is running on the port 7777");
});