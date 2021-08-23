import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import EventSchema from '../models/Event'
import TicketSchema from '../models/Ticket'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Event = mongoose.model('Event', EventSchema);
  Ticket = mongoose.model('Ticket', TicketSchema);
}

export const dbContext = new DbContext()
