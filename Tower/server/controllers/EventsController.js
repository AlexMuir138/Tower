import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { eventsService } from '../services/EventsService'
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

  async cancelEvent(req, res, next) {
    try {
      const event = await eventsService.cancelEvent(req.params.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async updateEvent(req, res, next) {
    try {
      const event = await eventsService.updateEvent(req.params.id, req.body, req.userInfo.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const eventData = req.body
      eventData.creatorId = req.userInfo.id
      eventData.creator = req.userInfo
      const event = await eventsService.create(eventData)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async getEventByTicketId(req, res, next) {
    try {
      const tickets = await eventsService.getTicketsByEventId(req.params.id)
      return res.send(tickets)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const event = await eventsService.getTicketsByEventId(req.params.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async getAllEvents(req, res, next) {
    try {
      const events = await eventsService.getAllEvents()
      return res.send(events)
    } catch (error) {
      next(error)
    }
  }
}
