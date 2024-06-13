require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT
const app = express()
app.use(express.json())

app.use('/api', userRouter)


//app.get('/', (req, res)=>{
//res.send('Hello')
//console.log(req.body)
//res.status(200).json('server working')
//})

app.listen(PORT, () => console.log(`'server started on port ${PORT}'`))