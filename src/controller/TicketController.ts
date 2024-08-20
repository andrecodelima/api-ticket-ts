import { Request, Response } from 'express'
import { openDb } from "../infrastructure/config/configDb.js"


// GET ALL
export async function getAllTicket(req: Request, resp: Response) {

    try {
        const db = await openDb()
        const tickets = await db.all('SELECT * FROM ticket')

        console.log('Registro(s) recuperados com sucesso')
        resp.json(tickets)


    } catch (e) {
       
        resp.status(500).json(
            {
                "statusCode": 500,
                "message": `Erro ao recuperar registro - ${e}`
            }
        )
    }
}

// GET BY ID
export async function getTicketById(req: Request, resp: Response) {

    try {
        const id = req.body.id
        const db = await openDb()
        const ticket_existente = await db.get('SELECT * FROM ticket WHERE id = ?', [id])

        if(!ticket_existente){
            return  resp.status(404).json(
                  {
               
                  "statusCode":404,
                  "message":`ID: ${id} não encontrado`
  
                  }
              )
        }

        resp.status(200).json(
            {
                data: ticket_existente
            }
        )

    } catch (e) {
        
        resp.status(500).json(
            {
                "statusCode": 500,
                "message": `Erro ao recuperar registro ${e}`
            }
        )
    }
}

// INSERT TICKET
export async function insereTicket(req: Request, resp: Response) {

    const { tipo, data_criacao, nome_evento, artista, data_evento, local_evento, horario, preco, setor, restricoes, disponibilidade, beneficios, entrada_prioritaria } = req.body

    try {

        const db = await openDb()
        let sql: string
        let params: any[]

        if (tipo === 'vip') {

            sql = 
                `INSERT INTO ticket( 

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
                    entrada_prioritaria) 

                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
                
            params =
                [
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
                    Number(disponibilidade),
                    beneficios,
                    Number(entrada_prioritaria)
                ]

        } else if (tipo === 'comum') {

            sql = 
            
            `INSERT INTO ticket( 

                tipo,
                data_criacao,
                nome_evento
                artista
                data_evento
                local_evento
                horario
                preco
                setor
                restricoes)

                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

            params =
                [
                    tipo,
                    data_criacao,
                    nome_evento,
                    artista,
                    data_evento,
                    local_evento,
                    horario,
                    preco,
                    setor,
                    restricoes
                ]

        } else {
            resp.status(400).json({ error: 'Tipo inválido' })
            return
        }

        await db.run(sql, params)
        
        resp.status(201).json(
            {
                "statusCode": 201,
                "message": 'Registro adicionado com sucesso'
            }
        )

    } catch (e) {
        
        resp.status(500).json(
            {
                "statusCode": 500,
                "message": `Erro ao inserir registro ${e}`
            }
        )
    }
}

// UPDATE TICKET
export async function updateTicket(req: Request, resp: Response) {

    try {

        const id = req.body.id
        const ticket = req.body
        const db = await openDb()

      const sql = 
            
            `UPDATE ticket SET

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

            WHERE id = ?`
        

        const params = [

            ticket.tipo,
            ticket.data_criacao,
            ticket.nome_evento,
            ticket.artista,
            ticket.data_evento,
            ticket.local_evento,
            ticket.horario,
            ticket.preco,
            ticket.setor,
            ticket.restricoes,
            ticket.disponibilidade,
            ticket.beneficios,
            ticket.entrada_prioritaria,
            ticket.id
        ]

        const ticket_existente = await db.get('SELECT * FROM ticket WHERE id = ?', [id])
        if(!ticket_existente){
            return resp.status(404).json(
                {
                    "statusCode": 404,
                    "message": 'Ticket não encontrado'
                }
            )

        } 
  
        const verificao_update = await db.run(sql, params)
        if (verificao_update.changes === 0) {
            return resp.status(400).json({
                "statusCode": 400,
                "message": 'Nenhuma alteração feita, verifique os dados fornecidos'
            })

        } else {
            resp.status(201).json({
                "statusCode": 201,
                "message": 'Registro atualizado com sucesso'
            })
        }


    } catch (e) {
        resp.status(500).json({
            "statusCode": 500,
            "message": 'Erro ao atualizar registro'
        })
    }
}

// REMOVE TICKET
export async function removeTicket(req: Request, resp: Response) {

    try {
        const id = req.body.id
        const db = await openDb()
        const result = await db.run('DELETE FROM ticket WHERE id=?', [id])

        if(result.changes === 0){
           return resp.status(404).json({
                "statusCode":404,
                "message":`Id ${id} não existe`
            })
        
        }  
            
        resp.json(
            {
                "statusCode": 200,
                "message": `Registro ${id} removido com sucesso`
            }
        )
        

    } catch (e) {
        resp.json(
            {
                "statusCode": 500,
                "message": `Erro ao remover registro ${e}`
            }
        )
    }
}