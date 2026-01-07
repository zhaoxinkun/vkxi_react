import "@/layout/layout.css"
import {Layout} from "antd";
import SiderBar from "@/layout/SiderBar.jsx";
import Main from "@/layout/Main.jsx";
import HeaderCom from "@/layout/Header.jsx";
import {useState} from "react";


function LayoutPage() {

    // 给一个状态
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapsedChange = (collapsed) => {
        setCollapsed(collapsed);
        console.log("🚀 ~ handleCollapsedChange ~ collapsed: ", collapsed)
    };

    return (
        <div className="module">
            <Layout>
                <SiderBar></SiderBar>

                {/*主内容区域*/}
                <Layout className="site-layout">
                    <HeaderCom collapsed={collapsed} handleCollapsedChange={handleCollapsedChange}></HeaderCom>
                    <Main></Main>
                </Layout>
            </Layout>
        </div>
    );
}

export default LayoutPage;