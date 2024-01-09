## SDK
[![npm version](https://img.shields.io/npm/v/@twa-dev/sdk)](https://www.npmjs.com/package/@twa-dev/sdk)

npm package for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) SDK.

```
npm i @twa-dev/sdk
```

### Motivation
Telegram distributes SDK via [link](https://core.telegram.org/bots/webapps#initializing-web-apps). It's kinda old fashion way to work with a library:

```html
<html lang="en">
<head>
    <title>TWA</title>
    <meta charset="UTF-8">
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script>
        window.Telegram.WebApp.showAlert('Hey there!');
    </script>
</head>
<body></body>
</html>
```

This package allows to work with SDK as with a npm package:

```js
import WebApp from '@twa-dev/sdk'

WebApp.showAlert('Hey there!');
```

And yes, it supports TS.

### Demo
[Codesandbox](https://codesandbox.io/s/sdk-kj5961)

### React
If you use React in your project, check out [MainButton](src/react/MainButton/Readme.md) and [BackButton](src/react/BackButton/Readme.md) components that we have prepared for you.
These components significantly simplify developer experience.
