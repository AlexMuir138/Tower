import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TicketsService {
  async createTicket(ticketData) {
    const newTicket = await dbContext.Ticket.create(ticketData)
    newTicket.populate('creator', 'name email picture')
    return newTicket
  }

  async deleteTicket(ticketId) {
    return await dbContext.Ticket.findByIdAndDelete(ticketId)
  }

  async getTicketById(id) {
    const ticket = await dbContext.Ticket.findOne({ _id: id }).populate('creator')
    if (!ticket) {
      throw new BadRequest('Could not find')
    }
    return ticket
  }
}
export const ticketsService = new TicketsService()
