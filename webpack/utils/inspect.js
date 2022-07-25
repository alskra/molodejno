const WebpackOptionsDefaulter = require('webpack/lib/WebpackOptionsDefaulter');
const configDevelopment = require('../webpack.development.config');
const configProduction = require('../webpack.production.config');

/* eslint-disable */
const log = console.log.bind(console);
const error = console.error.bind(console);
const dir = (...args) => console.dir(...args, { depth: null });
/* eslint-enable */

const parseArgv = () => {
	const argv = [];
	let prop = null;

	const setProp = (val) => {
		if (typeof argv[prop] === 'string' || Array.isArray(argv[prop])) {
			argv[prop] = [].concat(argv[prop], val);
		} else {
			argv[prop] = val;
		}
	};

	process.argv.slice(2).forEach((arg) => {
		if (/^-/.test(arg)) {
			prop = arg.split('=')[0].replace(/^-{1,2}/, '');

			const val = arg.split('=')[1];

			if (/^no-/.test(prop)) {
				prop = prop.replace(/^no-/, '');

				argv[prop] = false;
				prop = null;
			} else if (val) {
				setProp(val);
				prop = null;
			} else {
				argv[prop] = argv[prop] || true;
			}
		}

		if (/^[^-].*/.test(arg)) {
			if (prop) {
				setProp(arg);
				prop = null;
			} else {
				argv.push(arg);
			}
		}
	});

	return argv;
};

const argv = parseArgv();
const optionsDefaulter = new WebpackOptionsDefaulter();
const optionsDevelopmentDefault = optionsDefaulter.process({ mode: 'development' });
const optionsProductionDefault = optionsDefaulter.process({ mode: 'production' });

const optionsDevelopment = optionsDefaulter.process({
	...configDevelopment,
	mode: 'development',
});

const optionsProduction = optionsDefaulter.process({
	...configProduction,
	mode: 'production',
});

const dirOptions = (options) => {
	if (typeof argv.option === 'string') {
		// eslint-disable-next-line no-new-func
		dir((new Function('options', `
			try {
				return options.${argv.option};
			} catch (err) {
				console.error(err);
			}
		`))(options));
	} else {
		dir(options);
	}
};

log(process.argv.slice(2));
log(argv, argv.length);
// log('Development Default:');
// dirOptions(optionsDevelopmentDefault);
// log('Development Applied:');
// dirOptions(optionsDevelopment);
// log('Production Default:');
// dirOptions(optionsProductionDefault);
// log('Production Applied:');
// dirOptions(optionsProduction);
