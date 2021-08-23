import mongoose, { Schema } from 'mongoose'

const TicketSchema = new mongoose.Schema({
  body: { type: String, required: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })
TicketSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
export default TicketSchema
