import { DeleteOutlined } from "@ant-design/icons";
import { Col, Popconfirm, Row } from "antd";

export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <Row justify="space-between">
      <Col
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={toggleTodo}
      >
        {todo.text}
      </Col>
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
