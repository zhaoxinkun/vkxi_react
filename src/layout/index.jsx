import "@/css/main.css"
import {Layout} from "antd";
import SiderBar from "@/layout/SiderBar.jsx";
import Main from "@/layout/Main.jsx";
import HeaderCom from "@/layout/Header.jsx";


function LayoutPage() {
    return (
        <div className="module">
            <Layout>
                <SiderBar></SiderBar>

                {/*主内容区域*/}
                <Layout className="site-layout">
                    <HeaderCom></HeaderCom>
                    <Main></Main>
                </Layout>
            </Layout>
        </div>
    );
}

export default LayoutPage;