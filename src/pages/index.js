import { Layout } from 'antd';
import React from 'react';
import logo from '../assets/logo.svg';
import { TodoList } from '../components/TodoList';
import './index.css';

const { Header, Footer, Sider, Content } = Layout;

export default function() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <Layout>
          <Sider theme="light" width={100}>
            Sider
          </Sider>
          <Content style={{ minHeight: 'calc(100vh - 134px)', padding: '20px' }}>
            <TodoList />
          </Content>
        </Layout>
        <Footer style={{ background: 'white' }}>Footer</Footer>
      </Layout>
    </div>
  );
}
