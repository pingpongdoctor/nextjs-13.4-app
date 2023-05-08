import getTodos from "@/lib/getTodos";
import Todo from "./Todo";

export default async function TodoList() {
  const todoData: Promise<Todo[]> = getTodos();
  const todos = await todoData;

  return (
    <div>
      <ul>
        {todos?.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todoObj={todo} />)}
      </ul>
    </div>
  );
}
