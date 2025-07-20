import { DioAccount } from  './DioAccount'

export class CompanyAccount extends DioAccount {

    private tipoStatus:boolean = this.getStatus()

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    getLoan = (emprestimo:number):void => {
        if(this.tipoStatus && emprestimo > 0){
            this.balance += emprestimo
            console.log(`você fez um emprestimo de ${emprestimo} seu saldo agora é de ${this.balance}`)
        }
    }

    deposit = (deposito:number):void => {
        if(this.tipoStatus && deposito > 0){
            this.balance += deposito
            console.log(`Você depositou ${deposito} seu saldo é de ${this.balance}`)
        }
    }



}