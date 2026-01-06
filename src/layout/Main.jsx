import {Outlet} from "react-router-dom";
import {Layout} from "antd"

const {Content} = Layout;

function Main() {
    return (
        <>
            <Content className="site-layout-background" style={{margin: 16, padding: 20}}>
                {/*路由出口*/}
                <Outlet></Outlet>
            </Content>
        </>
    )
}


export default Main;