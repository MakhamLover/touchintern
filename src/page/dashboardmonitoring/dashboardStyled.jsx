import styled from "styled-components";
import { VideoCameraOutlined,
  AudioOutlined } from "@ant-design/icons";
import { DatePicker } from 'antd';
export const Body = styled.div`
  background-color: #f5f5f5;
  font-family: "Prompt";
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BodyScroll = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  width: 91%;
  height: 81%;
  margin-left: 120px;
  
`;
export const H1 = styled.h1`
  margin-left: 10px;
  margin-top: 60px;
  margin-bottom: 10px;
  font-size: 16px;
`;
export const H2 = styled.h2`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 20px;
`;
export const StyledVideoCameraOutlined = styled(VideoCameraOutlined)`
  margin-left: 120px;
  margin-top: 65px;
`;
export const AllCard = styled.div`
 display: flex;
 justify-content: space-around;
 margin-top: 20px;
`;
export const AllChart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
export const Chart = styled.div`
 width: 1275px;
 height: 600px;
 background-color: #ffffff;
 box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
 border-radius: 10px;
`;
export const HChart = styled.div`
 display: flex;
 justify-content: space-between;
`;
export const StyledDatePicker = styled(DatePicker)`
  height: 50px;
  margin-right: 20px;
  border-radius: 10px;
  width: 150px;
  margin-top: 10px;
  &.ant-picker:hover {
  border-color: #153250; /* สีกรอบเมื่อโฮเวอร์ */
}
`;
export const SearchBox = styled.div`
 display: flex;
 margin-top: 50px;
 height: 100vh;
 width: 100%;
 
`;
export const LineChart = styled.div`
 display: flex;
 justify-content: center;
 
`;