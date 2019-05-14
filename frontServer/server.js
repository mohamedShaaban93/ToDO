const express = require('express');
const app = express();
const path = require('path');


const bodyParser = require('body-parser');
const session = require('express-session');

app.use(session({ secret: 'zz', resave: true, saveUninitialized: true }))
app.use(bodyParser.json())


app.use(express.static(path.join( __dirname , './front/')));

app.use('',(req,res)=>{
    res.sendFile(path.join(__dirname,'./front/index.html'));
})


app.listen(process.env.PORT ||4200);
