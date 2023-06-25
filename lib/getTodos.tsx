export default async function getTodos(): Promise<Todo[] | undefined> {
  const res = await fetch("http://localhost:8000/todos", {
    headers: { "Content-Type": "application/json" },
    next: { tags: ["todos"] },
  });

  if (!res.ok) return undefined;

  const data: Todo[] = await res.json();

  return data;
}
