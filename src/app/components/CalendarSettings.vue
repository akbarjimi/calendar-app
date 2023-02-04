<template>
  <div>
    <div class="modal" id="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ translate.settings }}</p>
          <button @click="closeSettingsModal()" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="control">
            <label class="radio" v-for="language in this.availableLanguages">
              <input type="radio" name="language" :value="language" v-model="selectedLanguage" :checked="chosenLang(language)">
              {{ language }}
            </label>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="saveSettingsModal()" class="button is-success">{{ translate.save_settings }}</button>
          <button @click="closeSettingsModal()" class="button">{{ translate.cancel }}</button>
        </footer>
      </div>
    </div>
    <button @click="launchSettingsModal()" class="js-modal-trigger button is-primary" data-target="modal-js-example">
      <i class="fa fa-gear"></i>
    </button>
  </div>
</template>

<script>

import {store} from "../store";

export default {
  name: "CalendarSettings",
  data() {
    return {
      selectedLanguage: localStorage.getItem("language"),
    }
  },
  computed: {
    availableLanguages() {
      return [
        'en', 'fa'
      ];
    },
    translate() {
      return store.getActiveLang();
    }
  },
  methods: {
    launchSettingsModal() {
      document.querySelector("#modal").classList.add("is-active");
    },
    closeSettingsModal() {
      document.querySelector("#modal").classList.remove("is-active");
    },
    saveSettingsModal() {
      localStorage.setItem("language", this.selectedLanguage)
      this.closeSettingsModal();
    },
    chosenLang(language) {
      return this.selectedLanguage === language;
    },
  }
}
</script>