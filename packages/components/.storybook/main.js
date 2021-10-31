module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "webpack5"
  },
  babel(options) {
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
  typescript: { reactDocgen: false }
}