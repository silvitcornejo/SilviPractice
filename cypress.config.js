const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight : 800,
    viewportWidth : 1280,
    baseUrl: 'https://www.automationexercise.com/',
     // --- Setup screenshots ---
    screenshotOnRunFailure: true, // take a screenshot when a test fails
    screenshotsFolder: 'cypress/screenshots', // carpeta donde se guardan los screenshots
    setupNodeEvents(on, config) {
    },
  },
});