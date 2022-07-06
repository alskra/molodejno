## Содержание

* [Stylelint](#Stylelint)
* [ESLint](#ESLint)
* [Полезные ссылки](#Полезные-ссылки)

## Webpack

### Run

`npx webpack --config webpack.config.js`

> If a `webpack.config.js` is present, the `webpack` command picks it up by default. We use the `--config` option here
> only to show that you can pass a configuration of any name. This will be useful for more complex configurations that
> need to be split into multiple files.

> WARNING in configuration<br>
> The `mode` option has not been set, webpack will fallback to `production` for this value.<br>
> Set `mode` option to `development` or `production` to enable defaults for each environment.<br>
> You can also set it to `none` to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

### Mode

## Stylelint

### Справка

* [Stylelint](https://www.npmjs.com/package/stylelint)
* [Getting started](https://github.com/stylelint/stylelint/blob/HEAD/docs/user-guide/get-started.md)
* [Сравнение конфигов `order`](https://www.npmtrends.com/stylelint-config-idiomatic-order-vs-stylelint-config-property-sort-order-smacss-vs-stylelint-config-recess-order-vs-stylelint-config-rational-order)

### Установка

`npm install --save-dev stylelint stylelint-config-standard-scss stylelint-order stylelint-config-recess-order`

### Конфигурация

* [.stylelintrc.json](.stylelintrc.json)
* [.stylelintignore](.stylelintignore)

### Запуск

`npm run stylelint`

## ESLint

### Справка

* [ESLint](https://www.npmjs.com/package/eslint)
* [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/)
* [When should I use @babel/eslint-parser?](https://www.npmjs.com/package/@babel/eslint-parser)

### Установка с параметрами конфигурации

Устанавливаем ESLint:

`npm install --save-dev eslint`

Настраиваем файл конфигурации:

`npm init @eslint/config`

Запуск:

`./node_modules/.bin/eslint yourfile.js`

### Установка с текущей конфигурацией

`npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import @babel/core @babel/eslint-parser`

`@babel/core` и `@babel/eslint-parser` необходимы при использовании Babel, при отстутствии файла конфигурации Babel
в `.eslintrc.json` указываем `parserOptions.requireConfigFile: false`.

### Конфигурация

* [.eslintrc.json](.eslintrc.json)
* [.eslintignore](.eslintignore)

### Запуск

`npm run eslint`

## Полезные ссылки

* [Шаблоны Glob](https://github.com/isaacs/node-glob#glob-primer)
* [Using Dart Sass](https://github.com/sass/dart-sass)
* [Sass Options](https://sass-lang.com/documentation/js-api/interfaces/Options)
* [Resolve URL Loader](https://github.com/bholloway/resolve-url-loader/blob/v5/packages/resolve-url-loader/README.md)
