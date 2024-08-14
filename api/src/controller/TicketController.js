import { openDb } from "../infrastructure/config/configDb.js";


// GET ALL
export async function getAllTicket(req, resp){
     
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
export async function getTicketById(req, resp){

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
export async function insereTicket(req, resp){
   
    try{
        const ticket = req.body
        const db = await openDb()
        await db.run(
            'INSERT INTO ticket (nome_evento, artista, data_evento, horario, local_evento, setor)' + 
            'VALUES(?,?,?,?,?,?)',
            [ticket.nome_evento, ticket.artista, ticket.data_evento, 
             ticket.horario, ticket.local_evento, ticket.setor]
        )

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
export async function updateTicket(req, resp) {
    try {
        const ticket = req.body;
        const db = await openDb();
        await db.run(
            'UPDATE ticket SET '  +
            'nome_evento=?, '     +
            'artista=?, '         +
            'data_evento=?, '     +
            'horario=?, '         +
            'local_evento=?, '    +
            'setor=? '            +
            'WHERE id=?',

            [ticket.nome_evento, ticket.artista, ticket.data_evento, 
            ticket.horario, ticket.local_evento, ticket.setor, ticket.id]
        );

        console.log('Registro alterado com sucesso')
        resp.json(
            {
                "statusCode":200,
                "message":'Registro alterado com sucesso'
            }
        )
    }catch(e){
        console.error(`Erro ao atualizar registro -- ${e}`)
        resp.status(500).json(
            {
                "statusCode":500,
                "message":'Erro ao atualizar registro'
            }
        )
    }
}

// REMOVE TICKET
export async function removeTicket(req, resp){
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