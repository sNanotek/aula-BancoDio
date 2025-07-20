 export abstract class DioAccount {

    private readonly name: string
    private readonly accountNumber: number
    protected balance:number = 0
    private status:boolean = true

    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (deposito:number):void => {

        if(this.validadeStatus() && deposito > 0){
            this.balance += deposito
            console.log(`você depositou ${deposito} seu saldo agora é de ${this.balance}`)
        }else { console.log("Operação falhou, saldo ou conta inativa") }

    }

    withdraw = (saque:number):void => {

        if(!this.validadeStatus() || saque > this.balance || saque <= 0){
            console.log("você não pode sacar um valor maior que seu saldo, abaixo ou diferente")
        }else{
            this.balance -= saque
            console.log(`você sacou ${saque} novo saldo na conta de ${this.balance}`)
        }

    }

    getBalance = ():void => {
        console.log(this.balance)
    }

    private validadeStatus = ():boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }

    setStatus = (status:boolean):void => {
        this.status = status
        console.log("Status modificado")
    }

    getStatus = ():boolean => {
        return this.status
    }
}

