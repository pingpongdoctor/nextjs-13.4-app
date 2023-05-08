export default async function handleDeleteTodo(id: number): Promise<void> {
  const res = await fetch(`http://localhost:8000/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error delete todo");
  }
  return;
}
