import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TicketsService {
  createTicket(ticketData) {
    throw new Error('Method not implemented.')
  }

  deleteTicket(ticketId) {
    throw new Error('Method not implemented.')
  }
}
export const ticketsService = new TicketsService()
