function spamPromotions(name, email, balance){
    if(balance >= 10000){
        return `Send to ${name} on email ${email} promotions with big price, actual balance R${balance}.`
    }
    return `Send to ${name} on email ${email} only promotions unitl R$${balance}.`
}

export default spamPromotions