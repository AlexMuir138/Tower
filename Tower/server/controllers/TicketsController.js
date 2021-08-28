import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class TicketsController extends BaseController {
  constructor() {
    super('api/tickets')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTicket)
      .delete('/:ticketId', this.deleteTicket)
  }

  deleteTicket(arg0, deleteTicket) {
    throw new Error('Method not implemented.')
  }

  createTicket(arg0, createTicket) {
    throw new Error('Method not implemented.')
  }
}
