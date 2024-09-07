import { ReactNode, useEffect } from "react";
import { WebApp } from "../../sdk";

const defaultBottomBarColor =
  WebApp.themeParams.bottom_bar_bg_color ??
  WebApp.themeParams.secondary_bg_color;

export const BottomBar = ({
  bgColor = defaultBottomBarColor,
  children = null,
}: {
  bgColor?: string;
  children?: ReactNode;
}) => {
  useEffect(() => {
    WebApp.setBottomBarColor(bgColor);
  }, [bgColor]);

  useEffect(() => {
    return () => {
      WebApp.setBottomBarColor(defaultBottomBarColor);
    };
  }, []);

  return <>{children}</>;
};
