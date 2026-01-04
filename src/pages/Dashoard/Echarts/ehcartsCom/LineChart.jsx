// 这里是一个折线图组件，用于展示折线图。所有的数据都在options中传递。
import EChart from '@/components/Echarts/index.jsx';
import {createCartesianOption} from "@/pages/Dashoard/Echarts/config.js";

export default function LineChart(props) {

    const {options: {xData, yData}, height = 320} = props;

    const option = createCartesianOption({
        xData,
        yData,
        type: 'line',
        smooth: true,
        name: '访问量'
    })

    // const option = {
    //     tooltip: {trigger: 'axis'},
    //     legend: {data: ['访问量']},
    //     xAxis: {
    //         type: 'category',
    //         data: xData,
    //     },
    //     yAxis: {
    //         type: 'value',
    //     },
    //     series: [
    //         {
    //             name: '访问量',
    //             type: 'line',
    //             data: yData,
    //             smooth: true,
    //         },
    //     ],
    // };
    return <EChart option={option} height={height}/>;
}
