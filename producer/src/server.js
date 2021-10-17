import express from 'express'
import producer from './kafka-producer'
import routes from './routes'

const app = express()

app.use((req, res, next) => {
    req.producer = producer
    return next()
})

app.use(routes)

async function start(){
    await producer.connect()
    app.listen(3333)
    console.log('Server running on https://localhost:3333 :D')
}

start().catch(console.error)