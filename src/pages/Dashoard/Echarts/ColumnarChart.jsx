import EChart from '@/components/Echarts/index.jsx';

export default function ColumnarChart(props) {
    const {options: {xData, yData}, height = 300} = props;
    const option = {
        tooltip: {trigger: 'axis'},
        legend: {data: ['访问量']},
        xAxis: {
            type: 'category',
            data: xData,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: '访问量',
                type: 'bar',
                data: yData,
                smooth: true,
            },
        ],
    };
    return (
        <EChart option={option} height={height}></EChart>
    );
}