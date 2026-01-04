import {Carousel, Card} from 'antd';
import {useState} from "react";

import back1 from '@/assets/img/back1.jpg';
import back2 from '@/assets/img/back2.jpg';

import {LineChart, ColumnarChart} from "@/pages/Dashoard/Echarts/index.js";
import {barChartOptions, lineChartOptions} from "@/pages/Dashoard/Echarts/options/index.js";
import Model from "@/pages/Home/model.jsx";
import {MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';


function Home() {
    const [img] = useState([back1, back2]);
    const [modelData, setModelData] = useState([
        {id: "1", icon: <MailOutlined/>, content: "课程管理"},
        {id: "2", icon: <MenuFoldOutlined/>, content: "学生管理"},
        {id: "3", icon: <MenuUnfoldOutlined/>, content: "教师管理"}
    ]);
    return (
        <>

            <div className="banner">
                <Carousel autoplay autoplaySpeed={3000}>
                    {img.map((item, index) => <img key={index} src={item} alt=""/>)}
                </Carousel>
            </div>
            <div className="module-box">

                <div style={{flex: "0 1 60%", margin: '5px'}}>
                    <Card title="Card title">
                        <ColumnarChart options={barChartOptions} height={320}></ColumnarChart>
                    </Card>
                </div>

                <div style={{flex: "0 1 40%"}}>

                    <div className="module-box">
                        <div style={{flex: "0 1 100%", margin: '5px'}}>
                            <Card title="Card title">
                                <LineChart options={lineChartOptions} height={320}></LineChart>
                            </Card>
                        </div>
                    </div>

                    <div className="module-box">
                        <div style={{flex: "0 1 100%", margin: '5px'}}>
                            <Card title="Card title">
                                <Model list={modelData}></Model>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;