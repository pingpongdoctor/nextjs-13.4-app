import { Metadata } from "next";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import getTodos from "@/lib/getTodos";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Todo list",
};

//SET REVALIDATE 0 TO MAKE THE PAGE RENDERED AS A SSR PAGE (NO DATA CACHING)
export const revalidate = 0;

export default async function Todos() {
  const todos = await getTodos();

  if (!todos) {
    return notFound();
  }

  return (
    <>
      <AddTodo />
      {/* @ts-expect-error Async Server Component */}
      <TodoList todos={todos} />
    </>
  );
}
