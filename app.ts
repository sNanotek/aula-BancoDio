import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeoplePremiumAccount } from './class/PeoplePremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Cleiton", 3900)
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 3800)
const peoplePremiumAccount: PeoplePremiumAccount = new PeoplePremiumAccount("Cleitola", 90)

console.log("Depósito de 0 em PeopleAccount")
peopleAccount.deposit(0)
console.log("#########")

console.log("Tentativa de saque de 100 sem saldo em PeopleAccount")
peopleAccount.withdraw(100)
console.log("#########")

console.log("Depósito de 500 na conta de Cleiton")
peopleAccount.deposit(500)
console.log("#########")

console.log("Saque de 50 na conta de Cleiton")
peopleAccount.withdraw(50)
console.log("#########")

console.log("Solicitação de empréstimo de 300 na conta da empresa DIO")
companyAccount.getLoan(300)
console.log("#########")

console.log("Depósito de 300 na conta da empresa DIO")
companyAccount.deposit(300)
console.log("#########")

console.log("Depósito de 100 com bônus de 10% na conta Premium")
peoplePremiumAccount.deposit(100)
console.log("#########")

console.log("Consultando saldo da conta Premium")
peoplePremiumAccount.getBalance()
console.log("#########")
