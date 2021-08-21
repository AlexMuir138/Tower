export class Ticket {
  constructor(data) {
    this.body = data.body
    this.eventId = data.eventId
    this.id = data.id
    this.picture = data.picture
    this.email = data.email
    this.creator = data.creator
    this.creatorId = data.creatorId
  }
}
