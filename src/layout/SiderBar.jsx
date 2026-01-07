import {Layout, Menu} from "antd";
import {useState} from "react";
import {Link} from "react-router-dom";


const {Sider} = Layout;

// 路由和侧边的公共数据
import common from "@/router/common.jsx"
import {getPermission} from "@/utils/permission.js";


function SiderBar() {

    // 新的导航栏数据,无限级
    const createSiderItems = data => {
        return data.map(item => ({
            label: item.children ? item.title : <Link to={item.url}>{item.title}</Link>,
            key: item.url,
            icon: item.icon,
            children: item.children && createSiderItems(item.children)
        }))
    }
    // const [SiderItems] = useState(createSiderItems(common));
    const [items] = useState(createSiderItems(getPermission(common)))

    // 侧边栏数据
    // const [SiderItems] = useState([
    //     {
    //         key: '/home/index',
    //         label: <Link to="/home/index">企业首页</Link>,
    //         icon: <MailOutlined/>,
    //     },
    //     {
    //         key: '/home/course',
    //         label: <Link to="/home/course">课程管理</Link>,
    //         icon: <MailOutlined/>,
    //     },
    //     {
    //         key: '/home/student',
    //         label: <Link to="/home/student">学生管理</Link>,
    //         icon: <MailOutlined/>,
    //     },
    //     {
    //         key: '/home/teacher',
    //         label: "教师管理",
    //         icon: <MailOutlined/>,
    //         children: [
    //             {
    //                 key: '/home/teacher/info',
    //                 label: <Link to="/home/teacher/info">教师信息</Link>,
    //                 icon: <MailOutlined/>,
    //             },
    //             {
    //                 key: '/home/teacher/coursesTaught',
    //                 label: <Link to="/home/teacher/course">教师课程</Link>,
    //                 icon: <MailOutlined/>,
    //             },
    //         ]
    //     }, {
    //         key: '/home/information',
    //         label: '资料管理',
    //         icon: <SettingOutlined/>,
    //         children: [
    //             {
    //                 key: '/home/information/dataUpload',
    //                 label: <Link to="/home/information/dataUpload">资料上传</Link>,
    //                 icon: <MailOutlined/>
    //             },
    //             {
    //                 key: '/home/information/dataDownload',
    //                 label: <Link to="/home/information/dataDownload">资料下载</Link>,
    //                 icon: <MailOutlined/>
    //             }
    //         ]
    //     },
    // ])

    return (
        <>
            {/*侧边栏*/}
            <Sider
                // 是下边多的那个三角的
                collapsible
                width={180}
                collapsedWidth={64}
            >
                <div className="logo-title">
                    朝夕教育教务系统
                </div>
                <Menu
                    defaultSelectedKeys={['/home/index']}
                    mode="inline"
                    items={items}
                    theme="dark"
                />
            </Sider>
        </>

    )

}

export default SiderBar;