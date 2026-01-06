import {Button} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Layout} from "antd";
import {useState} from "react";
import {deleteToken} from "@/utils/token.js";
import {useNavigate} from "react-router-dom";

const {Header} = Layout;

function HeaderCom() {
    // 编程导航
    const navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);

    // 退出登录
    const logout = () => {
        deleteToken()
        navigate("/login")
    }
    return (
        <>
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
        </>
    )
}

export default HeaderCom;