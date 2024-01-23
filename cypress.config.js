const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
   video: true,
   retries: 1,
   e2e: {
      baseUrl: 'https://jsonplaceholder.typicode.com',
      specPattern: 'cypress/e2e/**/*.{js, feature}',
      setupNodeEvents(on, config) {
         on('file:preprocessor', cucumber());
         // implement node event listeners here
      },
   },
});
