import { FC, useEffect } from "react";
import { WebApp } from "../../sdk";

interface BackButtonProps {
  onClick?: VoidFunction;
}

const backButton = WebApp.BackButton;

let isButtonShown = false;

export const BackButton: FC<BackButtonProps> = ({
  onClick = () => {
    window.history.back();
  },
}) => {
  useEffect(() => {
    backButton.show();
    isButtonShown = true;
    return () => {
      isButtonShown = false;
      // Мы ждем 10мс на случай, если на следующем экране тоже нужен BackButton.
      // Если через это время isButtonShown не стал true, значит следующему экрану кнопка не нужна и мы её прячем
      setTimeout(() => {
        if (!isButtonShown) {
          backButton.hide();
        }
      }, 10);
    };
  }, []);

  useEffect(() => {
    WebApp.onEvent("backButtonClicked", onClick);
    return () => {
      WebApp.offEvent("backButtonClicked", onClick);
    };
  }, [onClick]);

  return null;
};
