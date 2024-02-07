const path = require("path");

module.exports = {
  server: {
    port: 3000,
  },
  webpack: (config, { isServer }) => {
    // Add your custom webpack configuration here
    // Example: Add a custom alias
    config.resolve.alias["@components"] = path.join(__dirname, "components");

    // Example: Modify babel loader configuration
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
