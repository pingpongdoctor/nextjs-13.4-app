export default async function getTodos() {
  const res = await fetch("http://localhost:8000/todos", {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("get todos error");

  const data: Todo[] = await res.json();

  return data;
}
