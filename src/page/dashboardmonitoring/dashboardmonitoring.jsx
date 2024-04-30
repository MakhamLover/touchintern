import React,{useEffect,useRef} from "react";
import {
  Body,
  H1,
  H2,
  BodyScroll,
  StyledVideoCameraOutlined,
  AllCard,
  AllChart,
  Chart,
  HChart,
  StyledDatePicker,
  SearchBox,
  LineChart
} from "./dashboardStyled";

import Card from "../../component/card/card";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import {Provinces} from '../../component/options/provinces'
import ChartJS from 'chart.js/auto'; 
import 'chartjs-plugin-datalabels';
// import 'chartjs-plugin-tooltip-dimensions';
const { Search } = Input;

function Dashboardmonitoring() {
  
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const chartRef = useRef(null);

  useEffect(() => {
    const xValues = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
    const yValues = [10, 20, 60, 40, 50, 60, 88, 80, 90, 100,70,60];

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('myChart');
    chartRef.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            fill: false,
            lineTension: 0,
            backgroundColor: 'red',
            borderColor: 'rgba(0,0,255,0.1)',
            hoverBackgroundColor: 'blue',
            hoverBorderColor: 'rgba(0,0,255,1)',
            data: yValues,
            backgroundColor: [
              'Black',
              'yellow',
              'Brown',
              'Green ',
              'Orange',
            ]
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'skyblue', 
            titleFont: { family: 'Prompt', size: 16, weight: 'bold' }, 
            titleColor:'#000000',
            bodyFont: { family: 'Prompt', size: 12 },
            bodyColor:'#000000',
            displayColors: true, 
          },
        },
        scales: {
          yAxes: [{
            ticks: { min: 6, max: 16 },
            font: { family: 'Prompt' }, 
          }],
        },
      },
      
    });
    

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);


  return (
    <Body>
      <div style={{ display: "flex" }}>
        <StyledVideoCameraOutlined />
        <H1>CCTV Monitoring</H1>
      </div>
      <BodyScroll>
        <AllCard>
          <Card />
        </AllCard>
        <AllChart>
          <Chart>
            <HChart>
              <H2>กราฟแสดงการทำงานของกล้องรายเดือน</H2>
              <StyledDatePicker
                placeholder="เลือกปี ค.ศ."
                onChange={onChange}
                picker="year"
              />
            </HChart>
            <LineChart>
            <canvas 
            id="myChart"
            style={{ 
              width: '100%',
              maxWidth: '900px',
              maxHeight:'500px',
              justifyContent:'center' 

              }} />        
              </LineChart>  
            </Chart>
          
        </AllChart>

        <SearchBox>
          <Search
            placeholder="ค้นหาชื่อกล้อง"
            onSearch={onSearch}
            style={{
              width: 360,
              height: 40,
              fontFamily: "Prompt",
              marginLeft: 20,
            }}
          />
           <Select
      showSearch
      style={{
        width: 200,
      }}
      placeholder="เลือกกลุ่ม"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={Provinces}
    />
        </SearchBox>

      </BodyScroll>
    </Body>
  );
}

export default Dashboardmonitoring;
