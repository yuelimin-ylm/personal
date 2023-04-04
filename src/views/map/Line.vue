<template>
  <div class="card-chart">
    <v-chart
      :init-options="{
        theme: 'dark'
      }"
      :autoresize="true"
      :option="option"
      :update-options="{ notMerge: true }"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  /* echarts sysmbol */
  let planePath: string =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
  const option = computed(() => {
    return {
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      // visualMap: {
      //   show: false,
      //   type: 'continuous',
      //   dimension: 2,
      //   hoverLink: true,
      //   inRange: {
      //     color: ['#ff0000'],
      //     // opacity: [0, 1],
      //     symbolSize: 30,
      //     colorLightness: 1
      //   }
      // },
      //地理坐标系组件 geo:地理坐标系组件 cartesian:直角坐标系组件 polar:极坐标系组件
      geo: {
        // show: true,
        map: 'world',
        // zoom: 1.5,//地图缩放比例
        // center: [102.848234, 32.82333],
        roam: true, //是否开启鼠标缩放和平移漫游
        scaleLimit: {
          //地图缩放范围
          max: 5,
          min: 0.8
        },
        // label:地图区域的文本标签样式
        label: {
          // color: '#fff',
          show: false,
          // *****************自定义富文本样式
          rich: {
            a: {
              color: '#fff',
              fontSize: 12
            }
          }
        },
        itemStyle: {
          // areaColor: '#0f375f',
          // borderColor: '#0f375f',
          // borderWidth: 1
        },
        emphasis: {
          display: true,
          focus: 'self', //自身高亮,淡出其他区域
          label: {
            show: true,
            color: '#fff'
          },
          itemStyle: {
            areaColor: '#0f375f'
          }
        },
        // blur: {
        //   //淡出状态下的多边形和标签样式
        //   label: {
        //     show: false
        //   },
        //   itemStyle: {
        //     color: 'rgba(0, 0, 0, 0.2)'
        //   }
        // },

        tooltip: {
          show: false
        },
        //名字映射,将中国的名字改为中文
        // nameMap: {
        //   China: '中国'
        // },
        nameProperty: 'name', //地图区域的名称
        selectedMode: 'multiple', //多选
        zlevel: 0, //z轴层叠
        z: 0, //z轴层叠
        //z与zlevel的区别:zlevel控制图形的前后顺序,z控制图形内部的前后顺序,当zlevel相同时,z大的在上面,当zlevel不同时,zlevel大的在上面
        // layoutCenter: ['50%', '50%'], //地图位置
        // // layoutSize: 100 // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
        // layoutSize: '10%' ,// 对于屏幕宽高的百分比
        regions: [
          //对地图某个区域进行个性化配置
          {
            name: 'China',
            selected: true,
            itemStyle: {
              areaColor: {
                type: 'linear',
                x: 0.5,
                y: 0.5,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(77, 195, 224, 0.97)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#377cdb' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              },
              borderColor: '#0f375f',
              borderWidth: 1
            }
          }
        ],
        silent: false //是否响应鼠标事件
      },
      // 要显示的散点数据
      series: [
        {
          name: '',
          type: 'lines',
          coordinateSystem: 'geo',
          // zlevel: 2,
          symbol: ['none', 'none'],
          symbolSize: 10,
          //标记
          effect: {
            show: true,
            period: 2,
            trailLength: 0.9, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: planePath,
            // symbol: 'pin',
            symbolSize: 10,
            // color: 'red',
            // roundTrip: true //特效是否循环播放
            type: [5, 10],
            dashOffset: 5
          },
          //飞线线条样式
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'red' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'blue' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            width: 1,
            cap: 'round',
            opacity: 0.6,
            curveness: 0.2 //线条曲度,支持从 0 到 1 的值，值越大曲度越大。
          },
          data: [
            {
              fromName: 'China',
              toName: 'Russia',
              coords: [
                [104.195397, 35.86166],
                [105.318756, 61.52401]
              ]
            },
            {
              fromName: 'China',
              toName: 'Canada',
              coords: [
                [104.195397, 35.86166],
                [-106.346771, 56.130366]
              ]
            },
            {
              fromName: 'China',
              toName: 'United States',
              coords: [
                [104.195397, 35.86166],
                [-99.901813, 61.362063]
              ]
            }
          ]
        },
        {
          type: 'map',
          map: 'world',
          geoIndex: 0
        }
      ]
    };
  });
</script>
<style lang="scss" scoped>
  .card-chart {
    width: 60vw;
    height: 60vh;
  }
</style>
