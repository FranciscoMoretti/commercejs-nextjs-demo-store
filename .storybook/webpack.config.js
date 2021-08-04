const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const path = require("path");
module.exports = ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve("awesome-typescript-loader")
            },
            {
              loader: require.resolve("react-docgen-typescript-loader")
            }
          ]
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [
        ...config.resolve.extensions,
        ".ts",
        ".tsx"
      ]
    }
  }
};

// module.exports = ({ config, mode }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve('babel-loader'),
//     options: {
//       presets: [require.resolve('babel-preset-react-app')],
//     },
//   })

//   config.resolve.extensions.push('.ts', '.tsx')

//   config.plugins.push(
//     new ForkTsCheckerWebpackPlugin({
//       async: false,
//       checkSyntacticErrors: true,
//       formatter: require('react-dev-utils/typescriptFormatter'),
//     })
//   )
//   return config
// }
