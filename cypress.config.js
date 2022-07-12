const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,

  "defaultCommandTimeout": 20000,
    "responseTimeout": 20000,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
