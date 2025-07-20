import { DioAccount } from  './DioAccount'

export class PeoplePremiumAccount extends DioAccount{

    private tipoStatus:boolean = this.getStatus()

    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }

    deposit = (deposito:number): void => {
        if(this.tipoStatus && deposito > 0){
            let acrescimo:number = deposito * 0.10
            this.balance += (deposito + acrescimo)
        }else{
            console.log("Não foi possível completar a operação!")
        }

    }

}