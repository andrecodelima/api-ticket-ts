import { Ticket } from "./ticket";

export class TicketVip extends Ticket{
    
    protected beneficios:string = ''
    protected entrada_prioritaria:boolean = false
    
    constructor(id:number, data_criacao: string, nome_evento:string, artista:string, data_evento:string, local_evento:string, 
                horario:string, preco:number, setor:string, disponibilidade:boolean, beneficios:string, entrada_prioritaria:boolean){

        super()

        this.id = id
        this.data_criacao = data_criacao
        this.nome_evento = nome_evento
        this.artista = artista
        this.data_evento = data_evento
        this.local_evento = local_evento
        this.horario = horario
        this.preco = preco
        this.setor = setor
        this.disponibilidade = disponibilidade
        this.beneficios = beneficios
        this.entrada_prioritaria = entrada_prioritaria
            
    }


    public getBeneficios():string{
        return this.beneficios
    }

    public setBeneficios():string{
        return this.beneficios
    }

    public getEntradaPrioritaria():boolean{
        return this.entrada_prioritaria
    }

    public setEntradaPrioritaria():boolean{
        return this.entrada_prioritaria

    }

}

