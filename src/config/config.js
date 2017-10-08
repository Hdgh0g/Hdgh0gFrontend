import * as devConfig from './config.dev';
import * as prodConfig from './config.prod'

let config = devConfig;
// noinspection JSUnresolvedVariable
if (process.env.NODE_ENV === 'production') {
  config = prodConfig;
}

export default config;
