import { Request, Response} from 'express'
import { openDb } from "../infrastructure/config/configDb.js"


// GET ALL
export async function getAllTicket(req:Request, resp:Response){
     
    try{
        const db = await openDb()
        const tickets = await db.all('SELECT * FROM ticket')
        
        console.log('Registro(s) recuperados com sucesso')
        resp.json(tickets)


    }catch(e){
        console.log(`Erro ao recuperar registro -- ${e}`)
        resp.status(500).json(
            {
                "statusCode":500,
                "message":'Erro ao recuperar registro'
            }
        )
    }
}

// GET BY ID
export async function getTicketById(req:Request, resp:Response){

    try{
        const id = req.body.id;
        const db = await openDb();
        const ticket = await db.get('SELECT * FROM ticket WHERE id = ?', [id])

        console.log(`Ticket: ${ticket}`)
        resp.status(200).json(
            {
                "statusCode":200,
                data:ticket
            }
        )
        

    }catch(e){
        console.log(`Erro ao recuperar registro -- ${e}`)
        resp.status(500).json(
            {
                "statusCode":500,
                "message":'Erro ao recuperar registro'
            }
        )
    }
}

// INSERT TICKET
export async function insereTicket(req:Request, resp:Response){
   
    const {tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria} = req.body

    try{
        
        const db = await openDb()
        let sql:string
        let params:any[]

        if(tipo === 'vip'){
            sql = 'INSERT INTO ticket(tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            params = [tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, Number(disponibilidade), beneficios, Number(entrada_prioritaria)];
        
        }else if(tipo === 'comum'){
            sql = 'INSERT INTO ticket(tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            params = [tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes]
        
        }else{
            resp.status(400).json({error:'Tipo inválido'})
            return
        }

        await db.run(sql, params)
        console.log('Registro adicionado com sucesso')
        resp.status(201).json(
            {
                "statusCode":201,
                "message":'Registro adicionado com sucesso'
            }
        )

        }catch(e){
            console.error(`Erro ao inserir registro -- ${e}`)
            resp.status(500).json(
                {
                    "statusCode":500,
                    "message":'Erro ao inserir registro'
                }
            )
        }
}

// UPDATE TICKET
export async function updateTicket(req: Request, resp: Response) {
    try {
        const { id, tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria } = req.body;
        const db = await openDb();
        
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

        await db.run(sql, params);
        console.log('Registro atualizado com sucesso');
        resp.status(200).json({
            "statusCode": 200,
            "message": 'Registro atualizado com sucesso'
        });

    } catch (e) {
        console.error(`Erro ao atualizar registro -- ${e}`);
        resp.status(500).json({
            "statusCode": 500,
            "message": 'Erro ao atualizar registro'
        });
    }
}

// REMOVE TICKET
export async function removeTicket(req:Request, resp:Response){
    try{
        const id = req.body.id;
        const db = await openDb();
        await db.run(

            'DELETE FROM ticket WHERE id=?', [id]
        )
        console.log('Registro removido com sucesso')
        resp.json(
            {
                "statusCode":200,
                "message":'Registro removido com sucesso'
            }
        )

    }catch(e){
        console.log(`Erro ao remover registro -- ${e}`)
        resp.json(
            {
                "statusCode":500,
                "message":`Erro ao remover registro`
            }
        )
    }
}