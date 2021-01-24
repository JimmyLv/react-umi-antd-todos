import { List } from 'antd';
import { useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import { AddTodo } from './AddTodo';
import { TodoItem } from './TodoItem';
import * as todoService from '../services/todos';

export function TodoList() {
  const [todo, setTodo] = useLocalStorageState('todo');
  const [todos, setTodos] = useLocalStorageState('todos', []);

  useEffect(() => {
    async function fetchData() {
      const todos = await todoService.query();
      setTodos(
        todos.map(item => ({
          id: item.id,
          text: item.title,
          completed: item.completed,
        })),
      );
    }

    fetchData();
  }, []);

  function addTodo({ todo }) {
    const newTodo = { id: +new Date(), text: todo, completed: false };
    setTodos([...todos, newTodo]);
    setTodo('');
  }

  function toggleTodo(todo) {
    setTodos(
      todos.map(item => ({
        ...item,
        completed: todo.id === item.id ? !item.completed : item.completed,
      })),
    );
  }

  function deleteTodo(todo) {
    setTodos(todos.filter(item => item.id !== todo.id));
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} setTodo={setTodo} todo={todo} />
      <List
        bordered
        dataSource={[...todos].reverse()}
        renderItem={item => (
          <List.Item style={{ display: 'block', background: 'white' }}>
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
