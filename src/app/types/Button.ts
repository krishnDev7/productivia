import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { URL } from "url";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  children?: React.ReactNode;
  src?: string;
  icon?: StaticImport | string;
  href?: URL | string;
};
