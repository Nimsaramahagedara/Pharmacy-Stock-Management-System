import React, { useEffect, useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, AppstoreOutlined, SnippetsOutlined, WarningOutlined, CheckSquareOutlined, BarChartOutlined, UserOutlined, ExclamationCircleOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import logo from '../images/logo.svg';
import { ConfigProvider, theme, Card } from "antd";
import { BulbOutlined, StarOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';



const { Header, Content, Sider } = Layout;

const items = [
  {
    key: 'sub1',
    icon: React.createElement(AppstoreOutlined),
    label: 'All Stock',
    to: ''
  },
  {
    key: 'sub2',
    icon: React.createElement(CheckSquareOutlined),
    label: 'Received ',
    children: [
      {
        key: 11,
        label: 'Add Received Items',
        to: 'addStock'
      },
      {
        key: 12,
        label: 'Create Purchase Order',
        to: 'purchaseOrder'
      },
    ]
  },
  {
    key: 'sub3',
    icon: React.createElement(BarChartOutlined),
    label: 'Dispatch Goods',
    to: 'sales'
  },
  {
    key: 'sub4',
    icon: React.createElement(WarningOutlined),
    label: 'Expiry Returns',
    children: [
      {
        key: 1,
        label: 'Purchase',
        to: 'purchaseReturn'
      },
      {
        key: 2,
        label: 'Sales',
        to: 'retsales'
      },
    ],
  },
  {
    key: 'sub5',
    icon: React.createElement(ExclamationCircleOutlined),
    label: 'Damaged Returns',
    children: [
      {
        key: 3,
        label: 'Purchase',
        to: 'purchase'
      },
      {
        key: 4,
        label: 'Sales',
        to: 'dmgretsales'
      },
    ],
  },
  {
    key: 'sub6',
    icon: React.createElement(SnippetsOutlined),
    label: 'Documents',
    children: [
      {
        key: 5,
        label: 'Invoice',
        to: 'invoice'
      },
      {
        key: 6,
        label: 'Goods Received Notes',
        to: 'rcdnotes'
      },
      {
        key: 7,
        label: 'Goods Delivery Notes',
        to: 'dnotes'
      },
      {
        key: 8,
        label: 'Purchase Order',
        to: 'order'
      },
      {
        key: 9,
        label: 'Packing Slip',
        to: 'packingslip'
      },
    ],
  },

];

const renderMenuItems = (menuItems) => {
  return menuItems.map((item) => {
    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
          {renderMenuItems(item.children)}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={`/${item.to}`}>{item.label}</Link>
        </Menu.Item>
      );
    }
  });
};


const DashboardLayout = () => {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleTheme = () => {
    setIsDarkMode((previousValue) => !previousValue);

  };


  return (
    <ConfigProvider theme={{
      algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
      <Layout>
        {/* Sidebar */}
        <Sider trigger={null} collapsible collapsed={collapsed}>

          <div className="demo-logo-vertical" style={{ height: '65px' , background: isDarkMode? 'black ' :'white' }}> <img src={logo} alt="logo" style={{ width: '100%', height: '100%' }} /> </div>

          <Menu
            mode="inline"
            defaultSelectedKeys={['sub1']}
            defaultOpenKeys={['sub1']}
            style={{
              borderRight: 0,
            }}
            theme='dark'
          >
            {renderMenuItems(items)}
          </Menu>
        </Sider>
        <Layout>
          {/* Top Header */}
          <Header
            style={{
              position:'relative',
              padding: '0',
              background: isDarkMode? 'black ' :'white'
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 64,
                height: '100%',
              }}
            />
            {/*THEME SWITCH BUTTON*/}
            <Space direction="vertical" style={{position:'absolute', right:'3%'}}>
              <Switch onClick={handleTheme}
                checkedChildren={<BulbOutlined />}
                unCheckedChildren={<StarOutlined />}
                
              />
            </Space>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
          </Header>

          <Breadcrumb
            style={{
              margin: '16px',
            }}
          >

            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              padding: 24,
              margin: '0px 16px',
              minHeight: '73.9vh',
            }}
          >

            {/* Pages Section */}
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Envicta ©2023
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default DashboardLayout;