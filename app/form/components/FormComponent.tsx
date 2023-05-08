"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonComponent from "@/app/components/ButtonComponent/ButtonComponent";

//ENV VARIABLES CAN NOT BE ACCESSED FROM CLIENT COMPONENTS (BROWSERS) WITH OUT NEXT_PUBLIC_...
//WAIT FOR THE SERVER ACTION TO BE STABLE IN THE MAIN DOCUMENTATION
export default function FormComponent() {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<number | null>(null);

  const handleUpdateName = function (e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  };

  const handleUpdateId = function (e: ChangeEvent<HTMLInputElement>) {
    setId(Number(e.target.value));
  };

  //USEROUTER WORKS LIKE LINK AND IT ONLY WORKS IN CLIENT COMPONENT
  const router = useRouter();

  async function handleSubmitTeacherInfor(e: FormEvent<HTMLFormElement>) {
    console.log(process.env);
    e.preventDefault();
    if (name && id) {
      //POST A NEW TEACHER
      await fetch("http://localhost:8000/teachers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, user_id: id }),
      });

      //ON DE-MAND REVALIDATION
      //STILL DO NOT UNDERSTAND WHY WE NEED TO TRIGGER ON-DEMAND REVALIDATE THROUGH ENDPOINTS
      await fetch(
        `http://localhost:3000/api/revalidate?tag=teachers&key=282f441d7ee4331bc05fe3f92c7b7329`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //REROUTE
      router.push(`/users/${id}`);
    } else {
      alert("Please provide both name and id");
    }
  }

  return (
    <form onSubmit={handleSubmitTeacherInfor}>
      <label htmlFor="teacher-name">Teacher Name</label>
      <input
        onChange={handleUpdateName}
        type="text"
        name="teacher-name"
        id="teacher-name"
      />
      <br />
      <label htmlFor="user-id">User Id</label>
      <input
        onChange={handleUpdateId}
        type="number"
        name="user-id"
        id="user-id"
      />
      <ButtonComponent btnClassName="button" btnContent="submit" />
    </form>
  );
}
