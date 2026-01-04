// 这里只做一件事,那就是创建一个图表的壳子出来
import {useEffect, useRef} from 'react';
import echarts from '@/utils/echarts';


export default function EChart(props) {
    const {option, height = 300} = props;
    const domRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (!domRef.current) return;

        // 1. 初始化
        chartRef.current = echarts.init(domRef.current);

        // 2. 设置配置
        chartRef.current.setOption(option);

        // 3. 卸载清理
        return () => {
            chartRef.current?.dispose();
        };
    }, [option]);

    return <div ref={domRef} style={{height}}/>;
}
