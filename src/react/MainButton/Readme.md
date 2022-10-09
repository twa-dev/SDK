# MainButton
React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) Main Button.

## Installation
```bash
npm i @twa-dev/sdk
```

## Motivation
TWA SDK contains an interface that controls [MainButton](https://core.telegram.org/bots/webapps#mainbutton). It's written in imperative way:

```js
const MainButton = window.Telegram.WebApp.MainButton;

MainButton.setText('Submit');
MainButton.show();
MainButton.onClick(() => alert('submitted'));
```

It's not the best way to write code, especially if you use libraries like React.

This package exports React component that wraps TWA MainButton SDK:

```js
import { MainButton } from '@twa-dev/sdk/react';

<MainButton text="Submit" onClick={() => alert('submitted')} />
```

## Demo
[@MainButtonDemoBot](https://t.me/MainButtonDemoBot)

[Codesandbox](https://codesandbox.io/s/main-button-demo-732l5z)

## Props
Naming is pretty straight forward and corresponds SDK props and methods:
- `text`
- `color`
- `textColor`
- `disabled`
- `progress`
- `onClick`
