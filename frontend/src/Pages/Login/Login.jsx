import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Layout, Typography, message } from 'antd';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export const logout = () => {
  // Remove the 'token' cookie
  Cookies.remove('token');

  // Perform any other logout-related actions (e.g., redirecting to the login page)
  window.location.href = '/login';
};

const Login = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { Content } = Layout;


  const onFinish = async (values) => {

    try {
      const a = await axios.post(`${baseUrl}/admin/`, values)

      if (a.status === 200) {
        const token = a.data.token
        Cookies.set('token', token, { expires: 1 })

        if (Cookies.get('token')) {
          navigate('/')
        } else {
          console.log(token + 'There is no token in cookies');
        }

      } else {
        // Handle unexpected response status codes here
        message.error('Unexpected Response');
      }

    } catch (error) {
      if (error.response) {
        // Handle errors with a response from the server
        message.error('Error: ' + error.response.data.error);
      } else if (error.request) {
        // Handle network errors (no response received)
        message.error('Network error: Unable to reach the server.');
      } else {
        // Handle other errors
        message.error('An error occurred: ' + error.message);
      }    }

  };


  return (
    <Layout>
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="login-form-container bg-white p-5 shadow rounded">
          <div className="text-center" style={{ height: '100px' }}>
            <img src={logo} alt="logo" className='h-100 w-100 object-fit-cover' style={{ objectFit: 'cover' }} />
          </div>
          {/* <Title level={4} className='text-center mb-3'>Login</Title> */}
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: false,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button mb-1" block>
                Log in
              </Button> <br />
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};
export default Login;