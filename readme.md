# Implementação básica do Kafka

### <strong>Como usar</strong>

```shell
    docker-compose up -d
    cd producer && yarn && yarn dev
    cd consumer-one && yarn && yarn dev
    cd consumer-two && yarn && yarn dev
```

# API

### <strong>Ideia</strong>
A ideia é ver o kafka de forma bem simplificada em funcionamento, permitindo a ligação de microserviços </br> em sua aplicação de forma simples através do uso de mensageria.

### <strong>Rota criada</strong>

```shell
http://localhost:3333/producer (POST)
```


### <strong>Caso de uso</strong>
O producer irá enviar dados mockados de uma pessoa, contendo seu id, nome, e-mail e saldo.</br>
Criei dois consumers simulando duas aplicações rodando separadamente, assim que a rota</br>producer for chamado os consumers irão ouvir e executar sua lógica.

- Consumer 1: Responsável por verificar se a pessoal tem o saldo necessário para começar</br> a enviar ofertas de cartão de crédito de um respectivo tipo, cartões premium para contas com mais </br> de R$20.000 e básicos para contas com saldo inferior.

- Consumer 2: Responsável por verificar o saldo da pessoa e spammar ofertas mais específicas por email</br> com maior chance de compra, caso o saldo seja superior a R$ 10.000 as ofertas enviadas terão um </br> valor maior visto que o poder de compra é maior, caso contrário as ofertas enviadas devem ter em seu </br> valor máximo o saldo atual.

