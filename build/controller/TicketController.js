var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { openDb } from "../infrastructure/config/configDb.js";
// GET ALL
export function getAllTicket(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = yield openDb();
            const tickets = yield db.all('SELECT * FROM ticket');
            console.log('Registro(s) recuperados com sucesso');
            resp.json(tickets);
        }
        catch (e) {
            console.log(`Erro ao recuperar registro -- ${e}`);
            resp.status(500).json({
                "statusCode": 500,
                "message": 'Erro ao recuperar registro'
            });
        }
    });
}
// GET BY ID
export function getTicketById(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.body.id;
            const db = yield openDb();
            const ticket = yield db.get('SELECT * FROM ticket WHERE id = ?', [id]);
            console.log(`Ticket: ${ticket}`);
            resp.status(200).json({
                "statusCode": 200,
                data: ticket
            });
        }
        catch (e) {
            console.log(`Erro ao recuperar registro -- ${e}`);
            resp.status(500).json({
                "statusCode": 500,
                "message": 'Erro ao recuperar registro'
            });
        }
    });
}
// INSERT TICKET
export function insereTicket(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        const { tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria } = req.body;
        try {
            const db = yield openDb();
            let sql;
            let params;
            if (tipo === 'vip') {
                sql = 'INSERT INTO ticket(tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                params = [tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, Number(disponibilidade), beneficios, Number(entrada_prioritaria)];
            }
            else if (tipo === 'comum') {
                sql = 'INSERT INTO ticket(tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                params = [tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes];
            }
            else {
                resp.status(400).json({ error: 'Tipo inválido' });
                return;
            }
            yield db.run(sql, params);
            console.log('Registro adicionado com sucesso');
            resp.status(201).json({
                "statusCode": 201,
                "message": 'Registro adicionado com sucesso'
            });
        }
        catch (e) {
            console.error(`Erro ao inserir registro -- ${e}`);
            resp.status(500).json({
                "statusCode": 500,
                "message": 'Erro ao inserir registro'
            });
        }
    });
}
// UPDATE TICKET
export function updateTicket(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria } = req.body;
            const db = yield openDb();
            const sql = `
        
            UPDATE ticket SET 
                tipo = ?, 
                data_criacao = ?, 
                nome_evento = ?, 
                artista = ?, 
                data_evento = ?, 
                local_evento = ?, 
                horario = ?, 
                preco = ?, 
                setor = ?, 
                restricoes = ?, 
                disponibilidade = ?, 
                beneficios = ?, 
                entrada_prioritaria = ?
            WHERE id = ?
        `;
            const params = [
                tipo,
                data_criacao,
                nome_evento,
                artista,
                data_evento,
                local_evento,
                horario,
                preco,
                setor,
                restricoes,
                disponibilidade,
                beneficios,
                entrada_prioritaria,
                id
            ];
            yield db.run(sql, params);
            console.log('Registro atualizado com sucesso');
            resp.status(200).json({
                "statusCode": 200,
                "message": 'Registro atualizado com sucesso'
            });
        }
        catch (e) {
            console.error(`Erro ao atualizar registro -- ${e}`);
            resp.status(500).json({
                "statusCode": 500,
                "message": 'Erro ao atualizar registro'
            });
        }
    });
}
// REMOVE TICKET
export function removeTicket(req, resp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.body.id;
            const db = yield openDb();
            yield db.run('DELETE FROM ticket WHERE id=?', [id]);
            console.log('Registro removido com sucesso');
            resp.json({
                "statusCode": 200,
                "message": 'Registro removido com sucesso'
            });
        }
        catch (e) {
            console.log(`Erro ao remover registro -- ${e}`);
            resp.json({
                "statusCode": 500,
                "message": `Erro ao remover registro`
            });
        }
    });
}
