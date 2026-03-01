const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
  },

  e2e: {
    specPattern: "**/*.feature",
    pageLoadTimeout: 250000,
    requestTimeout: 250000,
    responseTimeout: 250000,
    video: false,
    screenshotOnRunFailure: false,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
