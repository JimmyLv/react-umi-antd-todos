import { List } from "antd";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { AddTodo } from "./AddTodo";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [todo, setTodo] = useLocalStorageState("todo");

  function addTodo({ todo }) {
    const newTodo = { id: +new Date(), text: todo, completed: false };
    setTodos([...todos, newTodo]);
    setTodo("");
  }
  const [todos, setTodos] = useLocalStorageState("todos", []);

  function toggleTodo(todo) {
    setTodos(
      todos.map((item) => ({
        ...item,
        completed: todo.id === item.id ? !item.completed : item.completed,
      }))
    );
  }

  function deleteTodo(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} setTodo={setTodo} todo={todo} />
      <List
        bordered
        dataSource={[...todos].reverse()}
        renderItem={(item) => (
          <List.Item style={{ display: "block" }}>
            <TodoItem
              todo={item}
              toggleTodo={() => toggleTodo(item)}
              deleteTodo={() => deleteTodo(item)}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
