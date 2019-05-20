// 注意这里我们除了从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件

import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import styles from './index.less';
import Link from 'umi/link';


const {Header, Footer, Sider, Content} = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider width={256} style={{minHeight: '100vh'}} collapsible={false}>
                    <div className={styles.logo}>
                        课堂提问管理系统
                    </div>
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1">
                            <Link to='/question/list'>
                                <Icon type="pie-chart"/>
                                问题列表
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/question/ask'>
                                <Icon type="pie-chart"/>
                                发起提问
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>Header</Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, minHeight: 360}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}