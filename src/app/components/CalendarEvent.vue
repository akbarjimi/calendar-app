<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i @click="editEvent(day.id, event.details)" class="fa fa-pencil-square edit-icon"></i>
        <i @click="deleteEvent(day.id, event.details)" class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" :placeholder="event.details" v-model="newEventDetails"/>
      <div class="has-text-centered icons">
        <i class="fa fa-check"
           @click="updateEvent(day.id, event.details, newEventDetails)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from "../store";
export default {
  name: "CalendarEvent",
  data() {
    return {
      newEventDetails: '',
    }
  },
  props: ['event', 'day'],
  computed: {
    getEventBackgroundColor() {
      const colors = ['red', 'blue', 'green'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
  methods: {
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails)
    },
    updateEvent (dayId, originalEventDetails, updatedEventDetails) {
      if (updatedEventDetails === '') {
        updatedEventDetails = originalEventDetails;
      }
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = '';
    },
    deleteEvent(dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails);
    }
  }
}
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: white;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fa {
    padding: 0 2px;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #FFF;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
</style>