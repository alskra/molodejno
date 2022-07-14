import path from 'path';
import fs from 'fs';
import chokidar from 'chokidar';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import paths from './webpack/paths.js';

/* eslint-disable no-console */
const log = console.log.bind(console, '\x1b[92mWebP:\x1b[0m');
const error = console.error.bind(console);
/* eslint-enable no-console */

const basePaths = [
	// paths.images,
	paths.media,
];

let initial = [];

log('started', process.env.NODE_ENV);

const watcher = chokidar.watch(basePaths.map((pathItem) => path.resolve(pathItem, '**/*.{jpg,png}')));

watcher.on('all', (evt, filePath) => {
	if (!initial) {
		log(`image \x1b[33m${evt}\x1b[0m: \x1b[96m${filePath}\x1b[0m`);
	}

	if (evt === 'add' || evt === 'change') {
		const promise = (async (input, destination) => {
			await imagemin([input], {
				destination,
				plugins: [imageminWebp()],
			});

			log(`image \x1b[33moptimized\x1b[0m: \x1b[96m${filePath}\x1b[0m`);
		})(filePath, path.dirname(filePath));

		if (initial) {
			initial.push(promise);
		}
	}

	if (evt === 'unlink') {
		const webpFilePath = filePath.replace(/\.\w+$/, '.webp');

		try {
			if (fs.existsSync(webpFilePath)) {
				fs.unlinkSync(webpFilePath);
				log(`image \x1b[33unlink\x1b[0m: \x1b[96m${webpFilePath}\x1b[0m`);
			}
		} catch (err) {
			error(err);
		}
	}
});

watcher.on('ready', () => {
	Promise.all(initial).then(() => {
		initial = null;

		if (process.env.NODE_ENV !== 'development') {
			watcher.close().then(() => log('finished'));
		} else {
			log('images are watched...');
		}
	});
});
