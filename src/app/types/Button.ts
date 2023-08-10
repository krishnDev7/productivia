import { StaticImageData } from "next/image";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  src?: string;
  style?: React.CSSProperties;
  icon?:  React.ReactNode;
  iconPosition?: "left" | "right";
  iconStyle?: React.CSSProperties;
  iconClassName?: string;
  loading?: boolean;
  loadingText?: string;
  loadingIcon?: React.ReactNode;
  loadingIconPosition?: "left" | "right";
};
