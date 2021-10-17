import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'producer',
    brokers: ['localhost:9092'],
    logLevel: logLevel.NOTHING
})

const producer = kafka.producer()

export default producer