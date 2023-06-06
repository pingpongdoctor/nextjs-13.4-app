"use client";

import React from "react";

interface Props {
  btnOnClickFunction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnContent: string;
  btnClassName: string;
}

export default function ButtonComponent({
  btnOnClickFunction,
  btnContent,
  btnClassName,
}: Props) {
  return (
    <button className={btnClassName} onClick={btnOnClickFunction}>
      {btnContent}
    </button>
  );
}
