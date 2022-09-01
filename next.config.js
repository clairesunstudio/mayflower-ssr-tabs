const path = require('path');
/** @type {import('next').NextConfig} */

const withRP = require('next-transpile-modules')(['react-portal', '@massds/mayflower-react']);

process.env.SASS_PATH = `${path.resolve(__dirname, './src/components')
}:${
  path.resolve(__dirname, './node_modules/@massds/mayflower-assets/scss')
}:${
  path.resolve(__dirname, './node_modules/@massds/mayflower-assets/scss/00-base')}`;


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
          fullySpecified: false
      }
    })
    return config
  },
}


module.exports = withRP(nextConfig);

// module.exports = nextConfig
