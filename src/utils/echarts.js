// 核心
import * as echarts from 'echarts/core';

// 图表类型
import {BarChart, LineChart, PieChart} from 'echarts/charts';

// 组件
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
} from 'echarts/components';

// 渲染器
import {CanvasRenderer} from 'echarts/renderers';

// 注册
echarts.use([
    BarChart,
    LineChart,
    PieChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    CanvasRenderer,
]);

export default echarts;
