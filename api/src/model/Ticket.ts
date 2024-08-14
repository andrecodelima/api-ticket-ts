export class Ticket{

    protected id:number = 0
    protected data_criacao: string = ''
    protected nome_evento:string = ''
    protected artista:string = ''
    protected data_evento:string = ''
    protected local_evento:string = ''
    protected horario:string = ''
    protected preco:number = 0
    protected setor:string = ''
    protected disponibilidade:boolean = false



    public getId():number{
        return this.id
    }

    public setId():number{
        return this.id
    }

    public getDataCriacao():string{
        return this.data_criacao
    }

    public setDataCriacao():string{
        return this.data_criacao
    }

    public getNomeEvento():string{
        return this.nome_evento
    }

    public setNomeEvento():string{
        return this.nome_evento
    }

    public getArtista():string{
        return this.artista
    }

    public setArtista():string{
        return this.artista
    }

    
    public getDataEvento():string{
        return this.data_evento
    }

    public setDataEvento():string{
        return this.data_evento
    }

    public getLocalEvento():string{
        return this.local_evento
    }

    public setLocalEvento():string{
        return this.local_evento
    }

    public getHorario():string{
        return this.horario
    }

    public setHorario():string{
        return this.horario
    }
     

    public getPreco():number{
        return this.preco
    }

    public setPreco():number{
        return this.preco
    }


    public getSetor():string{
        return this.setor
    }

    public setSetor():string{
        return this.setor
    }
     

    public getDisponibilidade():boolean{
        return this.disponibilidade
    }

    public setDisponibilidade():boolean{
        return this.disponibilidade
    }
}

