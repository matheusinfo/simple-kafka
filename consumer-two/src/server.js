import consumer from './kafka-consumer'
import spamPromotions from './spam-promotions'

async function start(){
    await consumer.connect()
    await consumer.subscribe({ 
        topic: 'user-balance' 
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const generateMessage = JSON.parse(message.value)
            const { name, email, balance } = generateMessage.person
            console.log(spamPromotions(name, email, balance))
        }
    })
}

start().catch(console.error)