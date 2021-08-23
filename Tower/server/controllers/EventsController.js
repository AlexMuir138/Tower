import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
export class EventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('', this.getAllEvents)
      .get('/:id', this.getById)
      .get('/:id/ticket', this.getEventByTicketId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.cancelEvent)
      .put('/:id', this.updateEvent)
  }

  cancelEvent(arg0, cancelEvent) {
    throw new Error('Method not implemented.')
  }

  updateEvent(arg0, updateEvent) {
    throw new Error('Method not implemented.')
  }

  create(arg0, create) {
    throw new Error('Method not implemented.')
  }

  getEventByTicketId(arg0, getEventByTicketId) {
    throw new Error('Method not implemented.')
  }

  getById(arg0, getById) {
    throw new Error('Method not implemented.')
  }

  getAllEvents(arg0, getAllEvents) {
    throw new Error('Method not implemented.')
  }
}
