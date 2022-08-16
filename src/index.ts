import "./telegram-web-apps";
import { Telegram, WebApp } from "@twa-dev/types";

const telegramWindow = window as unknown as Window & { Telegram: Telegram };

const WebApp: WebApp = telegramWindow.Telegram.WebApp;

export default WebApp;
