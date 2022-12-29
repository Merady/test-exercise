const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: false,
    video: false,
    baseUrl: "https://hub88.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
