"use client";

interface Props {
  btnOnClickFunction?: () => void;
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
