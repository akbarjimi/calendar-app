<template>
  <div id="calendar-week" class="container">
    <div class="columns">
      <CalendarDay
          v-for="day in sharedState.weekdays"
          :key="day.id"
          :day="day"
      ></CalendarDay>
    </div>
  </div>
</template>

<script>
import {store} from "../store.js";
import CalendarDay from "./CalendarDay.vue";

export default {
  name: 'CalendarWeek',
  data () {
    return {
      sharedState: store.state
    }
  },
  computed: {
    translate() {
      return store.getActiveLang();
    }
  },
  components: {
    CalendarDay
  }
}
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }
}
</style>