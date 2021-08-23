import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class EventsService {
  async getAllEvents(query = {}) {
    const events = await dbContext.Event.find(query).populate('creator')
    return events
  }

  getTicketsByEventId(id) {
    throw new Error('Method not implemented.')
  }

  create(eventData) {
    throw new Error('Method not implemented.')
  }

  updateEvent(id, body, id) {
    throw new Error('Method not implemented.')
  }

  cancelEvent(id) {
    throw new Error('Method not implemented.')
  }
}
export const eventsService = new EventsService()
