const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    screenshotsFolder: "cypress/reports/screenshots",
    overwrite: true,
    html: ture,
    json: true,
  },

  e2e: {
    specPattern: "**/*.feature",
    pageLoadTimeout: 250000,
    requestTimeout: 250000,
    responseTimeout: 250000,
    video: true,
    screenshotOnRunFailure: true,

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
