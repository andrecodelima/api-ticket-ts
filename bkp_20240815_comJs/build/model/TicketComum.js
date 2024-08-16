import { Ticket } from "./Ticket";
export class TicketComun extends Ticket {
    constructor(id, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, disponibilidade, restricoes) {
        super();
        this.restricoes = '';
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
        this.restricoes = restricoes;
    }
    getRestricoes() {
        return this.restricoes;
    }
    setRestricoes() {
        return this.restricoes;
    }
}
