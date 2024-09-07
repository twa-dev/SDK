# BackButton
React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) Back Button.

## Installation
```bash
npm i @twa-dev/sdk
```

## Motivation
TWA SDK contains an interface that controls [BackButton](https://core.telegram.org/bots/webapps#backbutton). It's written in imperative way:

```jsx
const BackButton = window.Telegram.WebApp.BackButton;

BackButton.show();
BackButton.onClick(() => window.history.back());
```

It's not the best way to write code, especially if you use libraries like React.

This package exports React component that wraps TWA BackButton SDK:

```js
import { BackButton } from '@twa-dev/sdk/react';

<BackButton onClick={() => window.history.back()} />
```

## Demo
[@BackButtonDemoBot](https://t.me/BackButtonDemoBot)

[Codesandbox](https://codesandbox.io/s/back-button-demo-lpc0rv)
