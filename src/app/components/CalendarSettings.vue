<template>
  <div>
    <div class="modal" id="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button @click="closeSettingsModal()" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="control">
            <label class="radio">
              <input type="radio" name="lang" value="en-US" v-model="lang" :checked="chosenLang('en-US')">
              English (US)
            </label>
            <label class="radio">
              <input type="radio" name="lang" value="fa-IR" v-model="lang" :checked="chosenLang('fa-IR')">
              Persian
            </label>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="saveSettingsModal()" class="button is-success">Save changes</button>
          <button @click="closeSettingsModal()" class="button">Cancel</button>
        </footer>
      </div>
    </div>
    <button @click="launchSettingsModal()" class="js-modal-trigger button is-primary" data-target="modal-js-example">
      <i class="fa fa-gear"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "CalendarSettings",
  data() {
    return {
      lang: this.setLang(),
    }
  },
  methods: {
    setLang() {
      let settings = JSON.parse(localStorage.getItem("settings"));
      return settings !== undefined ? settings.lang : '';
    },
    launchSettingsModal() {
      let selector = document.querySelector("#modal");
      selector.classList.add("is-active");
    },
    closeSettingsModal() {
      let selector = document.querySelector("#modal");
      selector.classList.remove("is-active");
    },
    saveSettingsModal() {
      localStorage.setItem("settings", JSON.stringify({
        lang: this.lang
      }))
      this.closeSettingsModal();
    },
    chosenLang(lang) {
      return this.lang === lang;
    },
  }
}
</script>

<style scoped>

</style>