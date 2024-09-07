import { FC } from "react";
import { BottomButtonProps, useBottomButton } from "../bottomButton";

export const MainButton: FC<BottomButtonProps> = ({
  disabled,
  color,
  textColor,
  text,
  onClick,
  progress,
  hasShineEffect,
}) => {
  useBottomButton({
    type: "main",
    disabled,
    progress,
    textColor,
    text,
    onClick,
    color,
    hasShineEffect,
  });

  return null;
};
