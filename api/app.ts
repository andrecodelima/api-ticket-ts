import express from 'express'
import router from './src/routes/router'

const app = express()

app.use(express.json())
app.use(router)

const host = 'http://localhost'
const port = 3000

app.listen(port, ()=>{console.log(`Server ON.\nAcesse ${host}:${port}`)})