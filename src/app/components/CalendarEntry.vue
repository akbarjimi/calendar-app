<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" required v-model="inputEntry" />
      <p class="calendar-entry-day">
        {{ translate.dayOfEvent }}: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a
          class="button is-primary is-small is-outlined"
          @click="submitEvent(inputEntry)"
      >{{ translate.submit }}</a>
    </div>
    <p style="color: red; font-size: 13px" v-if="error">
      {{ translate.error }}
    </p>
  </div>
</template>

<script>
import {store} from "../store.js";

export default {
  name: "CalendarEntry",
  data() {
    return {
      inputEntry: '',
      error: false,
    }
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
    translate() {
      return store.getActiveLang();
    }
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === '') {
        this.error = true;
        return;
      }

      store.submitEvent(eventDetails);
      this.inputEntry = '';
      this.error = false;
    },
  }
}
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>