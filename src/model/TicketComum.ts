import { Ticket } from "./Ticket";

export class TicketComun extends Ticket{
    
    protected restricoes:string = ''
    
    constructor(id:number, data_criacao: string, nome_evento:string, artista:string, data_evento:string, local_evento:string, 
        horario:string, preco:number, setor:string, disponibilidade:boolean, restricoes:string){

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
        this.restricoes = restricoes
            
    }

    public getRestricoes():string{
        return this.restricoes
    }

    public setRestricoes():string{
        return this.restricoes
    }
}

 