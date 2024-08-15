export class Ticket {
    id = 0;
    data_criacao = '';
    nome_evento = '';
    artista = '';
    data_evento = '';
    local_evento = '';
    horario = '';
    preco = 0;
    setor = '';
    disponibilidade = false;
    tipo = '';
    constructor(id = 0, data_criacao = '', nome_evento = '', artista = '', data_evento = '', local_evento = '', horario = '', preco = 0, setor = '', disponibilidade = false, tipo = '') {
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
    getId() {
        return this.id;
    }
    setId() {
        return this.id;
    }
    getDataCriacao() {
        return this.data_criacao;
    }
    setDataCriacao() {
        return this.data_criacao;
    }
    getNomeEvento() {
        return this.nome_evento;
    }
    setNomeEvento() {
        return this.nome_evento;
    }
    getArtista() {
        return this.artista;
    }
    setArtista() {
        return this.artista;
    }
    getDataEvento() {
        return this.data_evento;
    }
    setDataEvento() {
        return this.data_evento;
    }
    getLocalEvento() {
        return this.local_evento;
    }
    setLocalEvento() {
        return this.local_evento;
    }
    getHorario() {
        return this.horario;
    }
    setHorario() {
        return this.horario;
    }
    getPreco() {
        return this.preco;
    }
    setPreco() {
        return this.preco;
    }
    getSetor() {
        return this.setor;
    }
    setSetor() {
        return this.setor;
    }
    getDisponibilidade() {
        return this.disponibilidade;
    }
    setDisponibilidade() {
        return this.disponibilidade;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo() {
        return this.tipo;
    }
}
