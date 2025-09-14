const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight : 800,
    viewportWidth : 1280,
    baseUrl: 'https://www.automationexercise.com/',
    specPattern: "cypress/e2e/**/*.cy.js", // pattern to locate test files
     // --- Setup screenshots ---
    screenshotOnRunFailure: true, // take a screenshot when a test fails
    screenshotsFolder: 'cypress/screenshots', // folder where screenshots are saved
    setupNodeEvents(on, config) {
    },
  },
});