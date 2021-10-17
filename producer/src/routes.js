import { Router } from 'express'
import faker from 'faker'

const routes = Router()

routes.post('/producer', async (req, res) => {
    const message = {
        person: {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            balance: faker.finance.amount(5000, 50000)
        }
    }
    await req.producer.send({
        topic: 'user-balance',
        messages: [{ 
            value: JSON.stringify(message)
        }]
    })
    return res.json({ success: 'Message send.' })
})

export default routes