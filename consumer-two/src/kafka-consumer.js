import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
    clientId: 'consumer-one',
    brokers: ['localhost:9092'],
    logLevel: logLevel.NOTHING
})

const consumer = kafka.consumer({ 
    groupId: 'second-consumer-group'
})

export default consumer