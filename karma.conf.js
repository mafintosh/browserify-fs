module.exports = config =>
  config.set({
    frameworks: ["mocha", "browserify"],
    browsers: ["Chrome"],
    files: ["test/test.js"],
    preprocessors: {
      "test/test.js": ["browserify"]
    }
  });
  