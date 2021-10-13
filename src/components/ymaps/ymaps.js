import Alpine from 'alpinejs';

Alpine.data('ymaps', ({center = [55.751574, 37.573856], hintContent} = {}) => ({
	init() {
		if (!document.getElementById('ymaps-api')) {
			const script = document.createElement('script');

			script.id = 'ymaps-api';
			script.src = 'https://api-maps.yandex.ru/2.1/?apikey=fa044ff0-6600-4936-8d46-1e837d7862df&lang=ru_RU';
			script.async = false;
			script.onload = () => window.dispatchEvent(new Event('ymaps-api-loaded'));
			document.head.append(script);
		}

		this.initMap();
	},
	initMap() {
		window.addEventListener('ymaps-api-loaded', () => {
			/* eslint-disable */
			ymaps.ready(() => {
				const myMap = new ymaps.Map(this.$root, {
					center,
					zoom: 9,
				}, {
					searchControlProvider: 'yandex#search',
				});

				const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent,
					// balloonContent: 'Это красивая метка',
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'data:image/png;base64,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',
					// Размеры метки.
					iconImageSize: [35, 50],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-17.5, -50],
				});

				myMap.geoObjects.add(myPlacemark);
				myMap.behaviors.disable('scrollZoom');
			});
			/* eslint-enable */
		});
	},
}));