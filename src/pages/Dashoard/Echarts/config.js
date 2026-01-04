//这里是图表的架构配置
/**
 * 创建笛卡尔坐标系图表的配置项
 * @param {Object} props - 图表配置项
 * @param {Array} props.xData - X轴数据
 * @param {Array} props.yData - Y轴数据
 * @param {string} props.type - 图表类型，如'line'、'bar'等
 * @param {boolean} [props.smooth=false] - 是否平滑曲线
 * @param {string} [props.name='访问量'] - 图表名称
 * @returns {Object} - 图表配置项
 */

export function createCartesianOption(props) {
    const {xData, yData, type, smooth = false, name = '访问量'} = props;
    return {
        tooltip: {trigger: 'axis'},
        legend: {data: [name]},
        xAxis: {
            type: 'category',
            data: xData,
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: name,
                type: type,
                data: yData,
                smooth: smooth,
            },
        ],
    };

}