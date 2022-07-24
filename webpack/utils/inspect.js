const WebpackOptionsDefaulter = require('webpack/lib/WebpackOptionsDefaulter');
const configDevelopment = require('../webpack.development.config');
const configProduction = require('../webpack.production.config');

/* eslint-disable */
const log = console.log.bind(console);
const error = console.error.bind(console);
const dir = (...args) => console.dir(...args/*, { depth: null }*/);
/* eslint-enable */

const parseArgv = () => {
	const argv = {};
	const regStr = '(?:^|\\s)-{1,2}(\\w[\\w-]*)(?:[=\\s]([\\w\\[\\]/.][\\w-\\[\\]/.]*))?';
	const options = process.argv.join(' ').match(new RegExp(regStr, 'g'));

	if (options) {
		options.forEach((option) => {
			const match = option.match(new RegExp(regStr));

			if (match) {
				if (argv[match[1]]) {
					argv[match[1]] = [argv[match[1]], match[2]];
				} else {
					argv[match[1]] = match[2] || true;
				}
			}
		});
	}

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

log('Development Default:');
dirOptions(optionsDevelopmentDefault);
log('Development Applied:');
dirOptions(optionsDevelopment);
log('Production Default:');
dirOptions(optionsProductionDefault);
log('Production Applied:');
dirOptions(optionsProduction);
