<template>
  <div>
    <div class="pull-left">
      <CalendarSettings/>
    </div>
    <div id="app">
      <CalendarWeek/>
      <CalendarEntry/>
    </div>
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';
import CalendarSettings from "./components/CalendarSettings.vue";

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
    CalendarSettings,
  }
}
</script>
<style lang="scss">
html, body {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  height: inherit;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>