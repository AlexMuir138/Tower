import { AppState } from '../AppState'
import { Ticket } from '../models/Ticket'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TicketsService {
  async getTicketsById(id) {
    const res = await api.get(`api/events/${id}/tickets`)
    logger.log(res.data)
    AppState.tickets = res.data.map(t => new Ticket(t))
  }

  async deleteTicket(id) {
    const res = await api.delete(`api/tickets/${id}`)
    logger.log(res)
  }

  async createTicket(ticketData) {
    const res = await api.post('api/ticket', ticketData)
    AppState.tickets.push(new Ticket(res.data))
  }
}
export const ticketsService = new TicketsService()
