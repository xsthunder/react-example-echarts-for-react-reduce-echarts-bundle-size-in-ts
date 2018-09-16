import React, { PureComponent } from 'react';
// import ReactEcharts from '../../../src/index';
// original from https://github.com/hustcc/echarts-for-react/blob/master/demo/src/charts/Simple.jsx
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/tooltip'

export default class Simple extends PureComponent {
  getOption = () => {
    return {
      title: {
        text: '堆叠区域图'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['邮件营销','联盟广告','视频广告']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  };
  render() {
    return (
      <div className='examples'>
        <div className='parent'>
          <label> render a Simple echart With <strong>option and height</strong>: </label>
          {/* <ReactEcharts */}
          <ReactEchartsCore
            echarts={echarts}
            option={this.getOption()}
            style={{height: '350px', width: '100%'}}
            className='react_for_echarts' />
        </div>
      </div>
    );
  }
}
