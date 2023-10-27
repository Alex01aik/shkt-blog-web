import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import "./styles.css";

export type ButtonProps = {
  children?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
