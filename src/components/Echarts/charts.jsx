// 这里是旧版本的直接展示图表的组件。我们后续使用了拆分的方式,所以这个不用了
import {useRef, useEffect} from "react";
import echarts from "@/utils/echarts.js";

function Chart() {

    const chartRef = useRef(null);
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const options = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        chart.setOption(options);
    }, [])

    return (
        <>
            <div ref={chartRef} style={{width: '600px', height: '400px'}}></div>
        </>
    );
}

export default Chart;
