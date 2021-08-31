import { AppState } from '../AppState'
import { Bug } from '../models/Bug'
const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')
class EventsService {
  async cancelEvent(id) {
    const res = await api.delete(`api/events/${id}`)
    console.log(res)
  }
}

export const eventsService = new EventsService()
