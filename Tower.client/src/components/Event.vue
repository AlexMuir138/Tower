<template>
  <div class="event d-flex justify-content-center">
    <h1>This be an event</h1>
    <h3>This be an Event Title</h3>
  </div>
</template>

<script>
import { eventsService } from '../services/EventsService'
import { useRoute } from 'vue-router'

export default {
  props: { event: { type: Object, required: true } },
  setup(props) {
    const route = useRoute()
    return {
      async cancelEvent() {
        if (await Notification.confirmAction()) {
          await eventsService.cancelEvent(props.event.id)
          await eventsService.getEvents(route.params.id)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
