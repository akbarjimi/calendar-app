import {seedData} from "./seed.js";

export const store = {
    state: {
        seedData
    },
    getActiveDay() {
        return this.state.seedData.find(day => day.active)
    },
    setActiveDay(dayId) {
        this.state.seedData.map(day => {
            day.id === dayId ? day.active = true : day.active = false;
        })
    },
    submitEvent(eventDetail) {
        const day = this.getActiveDay();
        day.events.push({ "details": eventDetail, "edit": false })
    },
    editEvent(dayId, eventDetail) {
        this.resetEditOfAllEvents();
        const dayObj = this.getDayObj(dayId);
        const eventObj = this.getEventObj(dayObj, eventDetail);
        eventObj.edit = true;
    },
    updateEvent(dayId, originalEventDetails, newEventDetails) {
        this.resetEditOfAllEvents();
        const dayObj = this.getDayObj(dayId);
        const eventObj = this.getEventObj(dayObj, originalEventDetails);
        eventObj.details = newEventDetails;
        eventObj.edit = false;
    },
    deleteEvent(dayId, eventDetails) {
        const dayObj = this.getDayObj(dayId);
        const index = dayObj.events.findIndex(e => e.details === eventDetails);
        dayObj.events.splice(index, 1);
    },
    resetEditOfAllEvents () {
        this.state.seedData.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            });
        });
    },
    getDayObj: function (dayId) {
        return this.state.seedData.find(day => day.id === dayId);
    },
    getEventObj: function (dayObj, eventDetail) {
        return dayObj.events.find(e => e.details === eventDetail);
    }
}