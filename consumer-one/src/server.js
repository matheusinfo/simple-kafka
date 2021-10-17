import consumer from './kafka-consumer'
import offerCreditCard from './offer-credit-card'

async function start(){
    await consumer.connect()
    await consumer.subscribe({ 
        topic: 'user-balance' 
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const generateMessage = JSON.parse(message.value)
            const { name, email, balance } = generateMessage.person
            console.log(offerCreditCard(name, email, balance))
        }
    })
}

start().catch(console.error)