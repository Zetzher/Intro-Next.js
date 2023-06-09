import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const style: CSSProperties = {
  color: "#0070F3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  href: string;
}
export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();
  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};
