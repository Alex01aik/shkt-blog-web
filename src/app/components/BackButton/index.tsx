"use client";

import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useEffect,
} from "react";
import "./styles.css";
import { useRouter, usePathname } from "next/navigation";

export type BackButtonProps = {
  children?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const BackButton: React.FC<BackButtonProps> = ({ children, ...props }) => {
  const router = useRouter();
  const path = usePathname();

  return path !== "/" ? (
    <button
      {...props}
      className={`button backButton ${props.className}`}
      onClick={() => router.back()}
    >
      {`<- Back`}
    </button>
  ) : (
    <></>
  );
};

export default BackButton;
