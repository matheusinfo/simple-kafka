function offerCreditCard(name, email, balance){
    if(balance >= 20000){
        return `Send to ${name} on email ${email} proposals to create a new premium credit card.`
    }
    return `Send to ${name} on email ${email} proposals to create a new basic credit card.`
}

export default offerCreditCard