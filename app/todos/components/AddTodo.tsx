"use client";

import handleAddTodo from "@/lib/handleAddTodo";
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {
  const [name, setName] = useState<string>("");

  const handleChangeName = function (e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  };
  const router = useRouter();
  const handleAdd = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name) {
      await handleAddTodo(name);
      router.push("/todos");
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input onChange={handleChangeName} type="text" />
      <button>Add Todo</button>
    </form>
  );
}
