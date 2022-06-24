import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
const { Header, Content, Footer, Sider } = Layout
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}))

const FeaturesMenu = () => {
  const handleClick = (event: any) => {
    console.log('test', event.key)
  }
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className='logo'>FCA</div>
        <Menu
          theme='dark'
          mode='inline'
          onClick={handleClick}
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout
        className='site-layout'
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            bottom: 0,
          }}
        >
          Projeto IFMG - FCA
        </Footer>
      </Layout>
    </Layout>
  )
}

export default FeaturesMenu
