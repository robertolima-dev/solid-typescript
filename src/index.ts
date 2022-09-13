import Customer from "./OO-S/Customer";
import Notify from "./OO-S/Notify";

import CreditCard from "./OO-L/CreditCard";
import DebitCard from "./OO-L/DebitCard";
import NubankRewards from "./OO-L/NubankRewards";

import TopCar from "./OO-I/Car";
import TopMotorcycle from "./OO-I/Motorcycle";

import Payment from "./OO-D/Payment";
import Uber from "./OO-O/Uber";
import UberBag from "./OO-O/UberBag";
import UberConfort from "./OO-O/UberConfort";

console.log('****************** S ******************')
// S => Single responsibility principle - SRP =>
// Nunca deve haver mais de um motivo para mudar uma classe
const customer = new Customer('Roberto Lima', 'robertolima.izphera@gmail.com', 'M')
const notification = new Notify(customer)

notification.sendEmail()

const customer2 = new Customer('Arthur', 'arthur@gmail.com', 'M')
const notification2 = new Notify(customer2)

notification2.sendEmail()


console.log('****************** O ******************')
// O => Open/close principle - OCP =>
// Aberto para extensão e fechado para modificação
const uber1 = new Uber('João', 'Rua Januário, 99', 'Av. João Dias, 1200')
uber1.configure()

const uber2 = new UberBag('Roberto', 'Rua josé Silva, 22', 'Avenida Santo amaro, 360', 'grande')
uber2.configure()

const uber3 = new UberConfort('Fábio', 'Rua Casemiro de Abreu, 72', 'Av Vereador José Diniz, 450', 'preto')
uber3.configure()

console.log('****************** L ******************')
// L => Liskov substitution principle - LSP =>
// Uma classe derivada pode ser substituível por sua classe base ou substituir a classe abstrata pela interface
const creditCard = new CreditCard()

creditCard.validate()
creditCard.collectPayment()

const debitCard = new DebitCard()

debitCard.validate()
debitCard.collectPayment()

const rewardsCard = new NubankRewards()

rewardsCard.validate()
rewardsCard.collectPayment()


console.log('****************** I ******************')
// I => Interface segregation principle - ISP =>
// Classes não devem ser forçadas a depender de métodos que não usam
new TopCar('preta', 2020, 4.1, 6, 4)
new TopMotorcycle('vermelha', 2020, 600)


console.log('****************** D ******************')
// D => Dependency Inversion principle - DIP =>
// Módulos de alto nível não devem depender de módulos de baixo nível e ambos devem depender de abstrações
const payment = new Payment()
payment.pay(500)