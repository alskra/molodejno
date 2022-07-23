const WebpackOptionsDefaulter = require('webpack/lib/WebpackOptionsDefaulter');
const argv = process.argv;

/* eslint-disable */
const log = console.log.bind(console);
const error = console.error.bind(console);
/* eslint-enable */

log(argv);
// log(new WebpackOptionsDefaulter().process({ mode: 'development' }));
