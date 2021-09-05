<template>
  <div class="home container-fluid">
    Here Be The Events
  </div>
  <div class="row">
    <div class="col-10">
      <Event v-for="event in state.events"
             :key="event.id"
             :event="event"
      />

      <h1>Buy Tickets!</h1>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { eventsService } from '../services/EventsService'
export default {
  setup() {
    const state = reactive({
      newEvent: {},
      sortCancelled: true,
      events: computed(() => {
        if (state.sortCancelled === true) {
          return AppState.events
        }
        return AppState.events.filter(c => c.cancelled === false)
      })
    })
  }
}
onMounted(async() => {
  try {
    await eventsService.getEvents()
  } catch (error) {
    Notification.toast(error)
  }
})
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
