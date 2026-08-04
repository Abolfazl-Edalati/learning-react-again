import type { ReactNode } from "react";

import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={[styles.button, className].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
