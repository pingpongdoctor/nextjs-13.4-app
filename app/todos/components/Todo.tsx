"use client";

import handlDeleteTodo from "../../../lib/handleDeleteTodo";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  todoObj: {
    id: number;
    name: string;
  };
}

export default function Todo({ todoObj: { id, name } }: Props) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = isFetching || isPending;
  const router = useRouter();

  const handleDelete = async function (id: number) {
    setIsFetching(true);

    await handlDeleteTodo(id);

    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <li style={{ color: !isMutating ? "red" : "black" }}>
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
