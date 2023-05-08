export default async function handleAddTodo(name: string): Promise<void> {
  const res = await fetch("http://localhost:8000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("add todos error");
  }

  return;
}
