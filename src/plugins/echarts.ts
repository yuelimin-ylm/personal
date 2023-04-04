import type { App } from 'vue';
import { use, registerMap } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  EffectScatterChart,
  HeatmapChart,
  RadarChart,
  MapChart,
  LinesChart
} from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GraphicComponent,
  VisualMapComponent,
  GeoComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import VueECharts from 'vue-echarts';
import worldGeoJSON from '@/assets/map/worldGeo.json';
import { registerTheme } from 'echarts';
export default {
  install: (app: App) => {
    use([
      RadarChart,
      SVGRenderer,
      LineChart,
      BarChart,
      PieChart,
      ScatterChart,
      EffectScatterChart,
      HeatmapChart,
      MapChart,
      LinesChart,
      GridComponent,
      TitleComponent,
      TooltipComponent,
      GraphicComponent,
      LegendComponent,
      ToolboxComponent,
      VisualMapComponent,
      GeoComponent,
      DatasetComponent,
      TransformComponent
    ]);
    // https://github.com/apache/echarts/issues/15527  ts error
    registerMap('world', worldGeoJSON as any);
    app.component('v-chart', VueECharts);
  }
};
