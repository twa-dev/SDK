# BottomBar
React component for [Telegram Web Apps (TWA)](https://core.telegram.org/bots/webapps) bottom bar. Bottom bar is an area that wraps [Main](../MainButton/Readme.md) and [Secondary](../SecondaryButton/Readme.md) buttons.

## Installation
```bash
npm i @twa-dev/sdk
```

## Motivation
TWA SDK contains an interface that controls [bottom bar](https://core.telegram.org/bots/webapps#september-6-2024). It's written in imperative way:

```js
const bottomBarColor = window.Telegram.WebApp.bottomBarColor;
window.Telegram.WebApp.setBottomBarColor('#ff0000');
```

It's not the best way to write code, especially if you use libraries like React.

This package exports React component that wraps TWA bottom bar SDK:

```jsx
import { BottomBar, MainButton, SecondaryButton } from '@twa-dev/sdk/react';

<BottomBar bgColor="#ff0000">
  <MainButton text="Continue" onClick={() => alert('continue')} />
  <SecondaryButton text="Cancel" position="bottom" onClick={() => alert('cancelled')} />    
</BottomBar>
```

## Demo
[@BottomButtonBot](https://t.me/BottomButtonBot)

[Codesandbox](https://codesandbox.io/p/sandbox/bottom-button-demo-s8wdgp)

## Props
Naming is pretty straight forward and corresponds SDK props and methods:
- `children`
- `bgColor`