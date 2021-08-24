import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class EventsService {
  async getAllEvents(query = {}) {
    const events = await dbContext.Event.find(query).populate('creator')
    return events
  }

  async getTicketsByEventId(id) {
    const tickets = await dbContext.Ticket.find({ event: id }).populate('creator')
    return tickets
  }

  async create(event) {
    const newEvent = await dbContext.Event.create(event)
    newEvent.populate('creator', 'name email picture')
    return newEvent
  }

  async updateEvent(id, eventData, userId) {
    const event = await dbContext.Event.findOne({ _id: id, creatorId: userId })
    if (event.cancelled) {
      throw Error('Cancelled')
    }
    eventData.cancelled = false
    return await dbContext.Event.findByIdAndUpdate(id, eventData, { new: true, runValidators: true })
  }

  async cancelEvent(id) {
    return await dbContext.Event.findByIdAndUpdate(id, { cancelled: true })
  }
}
export const eventsService = new EventsService()
