<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      This is where the party starts!
    </h1>
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
