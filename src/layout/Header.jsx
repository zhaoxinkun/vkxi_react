import {Button} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Layout} from "antd";
import {deleteToken} from "@/utils/token.js";
import {useNavigate} from "react-router-dom";
import {clearUserType} from "@/utils/userType.js";

const {Header} = Layout;

function HeaderCom(props) {
    console.log("🚀 ~ HeaderCom ~ props: ", props);

    const {collapsed, handleCollapsedChange} = props;

    // 编程导航
    const navigate = useNavigate()


    // 退出登录
    const logout = () => {
        deleteToken()
        clearUserType()
        navigate("/login")
    }
    return (
        <>
            <Header className="site-layout-background" style={{padding: 0}}>
                {/*侧边栏折叠按钮*/}
                <Button
                    type="text"
                    // onClick={handleCollapsedChange(!collapsed)}
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