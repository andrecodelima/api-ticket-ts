import { Ticket } from "./Ticket";
export class TicketVip extends Ticket {
    beneficios = '';
    entrada_prioritaria = false;
    constructor(id, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, disponibilidade, beneficios, entrada_prioritaria) {
        super();
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
        this.beneficios = beneficios;
        this.entrada_prioritaria = entrada_prioritaria;
    }
    getBeneficios() {
        return this.beneficios;
    }
    setBeneficios() {
        return this.beneficios;
    }
    getEntradaPrioritaria() {
        return this.entrada_prioritaria;
    }
    setEntradaPrioritaria() {
        return this.entrada_prioritaria;
    }
}
