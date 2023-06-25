import Todo from "./Todo";

interface Props {
  todos: Todo[];
}

export default async function TodoList({ todos }: Props) {
  return (
    <div>
      <ul>
        {todos?.length > 0 &&
          todos.map((todo) => <Todo key={todo.id} todoObj={todo} />)}
      </ul>
    </div>
  );
}
