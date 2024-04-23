import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import "./styles.css";

export type ButtonProps = {
  children?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={`button ${props.className}`}>
      {children}
    </button>
  );
};

export default Button;
