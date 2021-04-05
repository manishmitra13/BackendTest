module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "reporters": [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./src/test/testReport",
      "filename": "report.html",
      "expand": false,
      "openReport": false
    }]
  ],
}