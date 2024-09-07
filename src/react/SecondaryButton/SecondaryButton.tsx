import { FC, useEffect } from "react";
import { BottomButtonProps, useBottomButton } from "../bottomButton";
import { SecondaryButton as SecondaryButtonType } from "@twa-dev/types";
import { WebApp } from "../../sdk";

const secondaryButton = WebApp.SecondaryButton;

export const SecondaryButton: FC<
  BottomButtonProps & { position?: SecondaryButtonType["position"] }
> = ({
  disabled,
  color,
  textColor,
  text,
  onClick,
  progress,
  hasShineEffect,
  position = "bottom",
}) => {
  useBottomButton({
    type: "secondary",
    disabled,
    progress,
    textColor,
    text,
    onClick,
    color,
    hasShineEffect,
  });

  useEffect(() => {
    secondaryButton.setParams({
      position,
    });
  }, [position]);

  return null;
};
