export class Event {
  constructor(data) {
    this.title = data.title
    this.description = data.description
    this.ccancelled = data.cancelled
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.id = data.id
    this.updatedAt = data.updatedAt
  }
}
