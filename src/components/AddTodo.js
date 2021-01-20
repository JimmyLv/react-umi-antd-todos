import { Button, Form, Input } from 'antd'

export function AddTodo({ addTodo, todo, setTodo }) {
  return (
    <Form
      onFinish={addTodo}
      onValuesChange={({ todo }) => setTodo(todo)}
      initialValues={{ todo }}
    >
      <Form.Item
        label="Todo"
        name="todo"
        rules={[{ required: true, message: 'Please input your todo!' }]}
      >
        <Input placeholder="add your todo" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  )
}
