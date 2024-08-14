import express from 'express'
import router from './src/infrastructure/adapters/inbound/router.js'

const app = express()

app.use(express.json())
app.use(router)

const host = 'http://localhost'
const port = 3000

app.listen(port, ()=>{console.log(`Server ON.\nAcesse ${host}:${port}`)})