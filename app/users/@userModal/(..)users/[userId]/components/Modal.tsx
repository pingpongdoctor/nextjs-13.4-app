"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Model({ children }: Props) {
  const router = useRouter();
  const bigDivEle = useRef(null);
  const smallDivEle = useRef(null);

  const backFunc = function (e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === bigDivEle.current || e.target === smallDivEle.current) {
      console.log(e.target);
      router.back();
    }
  };
  return (
    <div
      ref={bigDivEle}
      onClick={(e) => {
        console.log(e.target);
        backFunc(e);
      }}
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={smallDivEle}
        style={{
          width: "50vw",
          height: "50vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
}
