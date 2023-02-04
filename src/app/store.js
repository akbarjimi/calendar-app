import {seedData} from "./seed.js";

export const store = {
    state: {
        seedData: seedData.map(function (day) {
            if (localStorage.length <= 0) {
                return day;
            }

            let item = localStorage.getItem(day.id);
            if (item === null) {
                return day;
            }

            day.events = JSON.parse(item).events;
            return day;
        }),
        languages: require("./lang")
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
        this.storeDayObj(day);
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
        this.storeDayObj(dayObj);
    },
    deleteEvent(dayId, eventDetails) {
        const dayObj = this.getDayObj(dayId);
        const index = dayObj.events.findIndex(e => e.details === eventDetails);
        dayObj.events.splice(index, 1);
        this.storeDayObj(dayObj);
    },
    resetEditOfAllEvents () {
        this.state.seedData.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            });
        });
    },
    storeDayObj(day) {
        localStorage.setItem(day.id, JSON.stringify(day));
    },
    getDayObj: function (dayId) {
        return this.state.seedData.find(day => day.id === dayId);
    },
    getEventObj: function (dayObj, eventDetail) {
        return dayObj.events.find(e => e.details === eventDetail);
    },
    getActiveLang() {
        let selectedLanguage = localStorage.getItem("language");
        if (selectedLanguage === null) {
            selectedLanguage = 'en';
        }

        return this.state.languages.lang[selectedLanguage];
    }
}