"use client";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/app/components/ButtonComponent/ButtonComponent";
//CAN PASS DOWN FUNCTION FROM CLIENT COMPONENT TO CLIENT COMPONENT BUT NOT FROM SERVER COMPONENT TO CLIENT COMPONENT
export default function BackHomeBtn() {
  const router = useRouter();
  return (
    <ButtonComponent
      btnContent="Back Home"
      btnOnClickFunction={() => {
        router.push("/");
      }}
      btnClassName="button"
    />
  );
}
