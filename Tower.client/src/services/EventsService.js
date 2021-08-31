import { AppState } from '../AppState'
const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')
class EventsService {
  async getEvents() {
    const res = await api.get('api/events')
    logger.log(res.data)
    AppState.events = res.data.map(e => new Event(e))
  }

  async cancelEvent(id) {
    const res = await api.delete(`api/events/${id}`)
    logger.log(res)
  }
}

export const eventsService = new EventsService()
