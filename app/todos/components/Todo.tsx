"use client";

import handlDeleteTodo from "../../../lib/handleDeleteTodo";
import { useRouter } from "next/navigation";

interface Props {
  todoObj: {
    id: number;
    name: string;
  };
}

export default function Todo({ todoObj: { id, name } }: Props) {
  const router = useRouter();

  const handleDelete = async function (id: number) {
    await handlDeleteTodo(id);
    router.refresh();
  };

  return (
    <li>
      <p>
        Todo thing with id:{id} and name:{name}
      </p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
