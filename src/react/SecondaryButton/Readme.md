# SecondaryButton
React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) SecondaryButton.

## Installation
```bash
npm i @twa-dev/sdk
```

## Motivation
TWA SDK contains an interface that controls [BottomButton](https://core.telegram.org/bots/webapps#bottombutton). It's written in imperative way:

```js
const SecondaryButton = window.Telegram.WebApp.SecondaryButton;

SecondaryButton.setParams({ text: 'Cancel', position: 'bottom' });
SecondaryButton.show();
SecondaryButton.onClick(() => alert('cancelled'));
```

It's not the best way to write code, especially if you use libraries like React.

This package exports React component that wraps TWA SecondaryButton SDK:

```jsx
import { MainButton, SecondaryButton } from '@twa-dev/sdk/react';

<MainButton text="Continue" onClick={() => alert('continue')} />
<SecondaryButton text="Cancel" position="bottom" onClick={() => alert('cancelled')} />
```

## Demo
[@BottomButtonBot](https://t.me/BottomButtonBot)

[Codesandbox](https://codesandbox.io/p/sandbox/bottom-button-demo-s8wdgp)

## Props
Naming is pretty straight forward and corresponds SDK props and methods:
- `text`
- `color`
- `textColor`
- `disabled`
- `progress`
- `onClick`
- `hasShineEffect`
- `position`
