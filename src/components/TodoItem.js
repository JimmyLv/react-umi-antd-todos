import { DeleteOutlined } from '@ant-design/icons';
import { Checkbox, Col, Popconfirm, Row } from 'antd';

export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <Row justify="space-between">
      <Col>
        <Checkbox checked={todo.completed} onChange={toggleTodo} />
      </Col>
      <Col style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Col>
      <Col>
        <Popconfirm
          title="Are you sure to delete this todo?"
          onConfirm={deleteTodo}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined />
        </Popconfirm>
      </Col>
    </Row>
  );
}
