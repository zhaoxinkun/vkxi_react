import "@/css/main.css"
import {Layout, Button, Menu} from "antd";
import {useNavigate, Link, Outlet} from "react-router-dom";
import {MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {useState} from "react";
import {deleteToken} from "@/utils/token.js";

const {Header, Sider, Content} = Layout;

function LayoutPage() {

    // 编程导航
    const navigate = useNavigate()

    // 侧边栏数据
    const [SiderItems] = useState([
        {
            key: 'index',
            label: <Link to="/home/index">企业首页</Link>,
            icon: <MailOutlined/>,
        },
        {
            key: 'course',
            label: <Link to="/home/course">课程管理</Link>,
            icon: <MailOutlined/>,
        },
        {
            key: 'student',
            label: <Link to="/home/student">学生管理</Link>,
            icon: <MailOutlined/>,
        },
        {
            key: 'teacher',
            label: "教师管理",
            icon: <MailOutlined/>,
            children: [
                {
                    key: 'teacherInfo',
                    label: <Link to="/home/teacher/info">教师信息</Link>,
                    icon: <MailOutlined/>,
                },
                {
                    key: 'coursesTaught',
                    label: <Link to="/home/teacher/course">教师课程</Link>,
                    icon: <MailOutlined/>,
                },
            ]
        },
    ])

    // 侧边栏是否折叠
    const [collapsed, setCollapsed] = useState(false);

    // 退出登录
    const logout = () => {
        deleteToken()
        navigate("/login")
    }

    return (
        <div className="module">
            <Layout>

                {/*侧边栏*/}
                <Sider
                    // 是下边多的那个三角的
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    width={180}
                    collapsedWidth={64}
                >
                    <div className="logo-title">
                        朝夕教育教务系统
                    </div>
                    <Menu
                        defaultSelectedKeys={['index']}
                        defaultOpenKeys={['teacher']}
                        mode="inline"
                        items={SiderItems}
                        theme="dark"
                    />
                </Sider>


                {/*主内容区域*/}
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {/*侧边栏折叠按钮*/}
                        <Button
                            type="text"
                            onClick={() => setCollapsed(!collapsed)}
                            style={{fontSize: '16px', width: 64, height: 64}}
                        >
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        </Button>
                        <Button type="primary" onClick={logout}>用户退出</Button>
                    </Header>
                    <Content className="site-layout-background" style={{margin: 16, padding: 20}}>
                        {/*路由出口*/}
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default LayoutPage;