import { useState } from 'react';
import { Form, Button, Input } from 'antd';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="name" label="Username">
        <Input
          className="login"
          type="text"
          id="name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input
          className="login"
          type="password"
          id="login_password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
