module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/whatsapp-ds/";
    }

    return config;
  },
};
