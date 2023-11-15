const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1iteox',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.euronews.com/'
  },
});
