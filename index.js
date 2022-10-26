
const express = require('express');

const userRouter=require("./routes/user.route")
const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.use(userRouter)


app.use((req,res,next)=>{
    res.send("<h1>404 pages is not found</h1>");
    next()
})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))