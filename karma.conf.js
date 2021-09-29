const { createDefaultConfig } = require("@open-wc/testing-karma");
const merge = require("deepmerge");

module.exports = (config) => {
  config.reporters = ["coverage"];
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ["mocha"],
      reporters: ["coverage"],
      coverageReporter: {
        type: "html",
        dir: "coverage/",
      },
      client: {
        mocha: { ui: "bdd" },
      },
      files: [
        {
          pattern: config.grep ? config.grep : "test/**/*.test.js",
          type: "module",
        },
      ],
      esm: {
        // if you are using 'bare module imports' you will need this option
        nodeResolve: true,
        coverage: true,
      },
    })
  );
  return config;
};
