import { Router } from "express";
import { insereTicket, getAllTicket, updateTicket, removeTicket, getTicketById } from "./TicketController.js";

const router = Router()

router.get('/',(req, resp)=> resp.status(200).send('Home Ticket'))
router.get('/ticket', getAllTicket)
router.get('/ticket/id', getTicketById)
router.post('/ticket', insereTicket)
router.put('/ticket', updateTicket)
router.delete('/ticket', removeTicket)

export default router
