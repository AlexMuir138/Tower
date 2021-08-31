import { AppState } from '../AppState'
const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')
class EventsService {
  async getEvents() {
    const res = await api.get('api/events')
    logger.log(res.data)
    AppState.events = res.data.map(e => new Event(e))
  }

  async getEventById(id) {
    const res = await api.get(`api/events/${id}`)
    AppState.activeEvent = res.data
    logger.log(res.data)
  }

  async createEvent(eventData) {
    const res = await api.post('api/events', eventData)
    AppState.events.push(new Event(res.data))
    return res.data
  }

  async editEvent(edit) {
    const res = await api.put(`api/events/${edit.bug}`, edit)
    return res.data
  }

  async cancelEvent(id) {
    const res = await api.delete(`api/events/${id}`)
    logger.log(res)
  }
}

export const eventsService = new EventsService()
