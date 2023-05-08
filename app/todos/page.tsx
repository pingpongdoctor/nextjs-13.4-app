import { Metadata } from "next";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export const metadata: Metadata = {
  title: "Todo list",
};

//SET REVALIDATE 0 TO MAKE THE PAGE RENDERED AS A SSR PAGE (NO DATA CACHING)
export const revalidate = 0;

export default function Todos() {
  return (
    <>
      <AddTodo />
      {/* @ts-expect-error Async Server Component */}
      <TodoList />
    </>
  );
}
