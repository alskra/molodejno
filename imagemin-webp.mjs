import path from 'path';
import fs from 'fs';
import chokidar from 'chokidar';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import paths from './webpack/paths.js';

/* eslint-disable no-console */
const log = console.log.bind(console);
const error = console.error.bind(console);
/* eslint-enable no-console */

log('Imagemin started', process.env.NODE_ENV);

const watcher = chokidar.watch([
	// path.resolve(paths.src, 'images/**/*.{jpg,png}'),
	path.resolve(paths.public, 'media/**/*.{jpg,png}'),
]);

let initial = [];

watcher.on('all', (evt, filePath) => {
	log(`Image ${evt}: ${filePath}`);

	if (evt === 'add' || evt === 'change') {
		const promise = (async (input, destination) => {
			await imagemin([input], {
				destination,
				plugins: [imageminWebp()],
			});

			log(`Image optimized: ${filePath}`);
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
				log(`Image unlink: ${webpFilePath}`);
			}
		} catch (err) {
			error(err);
		}
	}
});

watcher.on('ready', () => {
	Promise.all(initial).then(() => {
		initial = null;
		log('Images are watched...');
	});
});
