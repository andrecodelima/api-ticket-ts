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
    protected tipo:string = ''

    constructor(

        id: number = 0,
        data_criacao: string = '',
        nome_evento: string = '',
        artista: string = '',
        data_evento: string = '',
        local_evento: string = '',
        horario: string = '',
        preco: number = 0,
        setor: string = '',
        disponibilidade: boolean = false,
        tipo: string = ''

    ){
        this.id = id;
        this.data_criacao = data_criacao;
        this.nome_evento = nome_evento;
        this.artista = artista;
        this.data_evento = data_evento;
        this.local_evento = local_evento;
        this.horario = horario;
        this.preco = preco;
        this.setor = setor;
        this.disponibilidade = disponibilidade;
        this.tipo = tipo;
    }

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

    public getTipo():string{
        return this.tipo
    }

    public setTipo():string{
        return this.tipo
    }
}

