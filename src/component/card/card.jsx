import React from 'react'
import { CardBox,H1,Content,Image,Amount } from './cardStyled';
import allcctv from '../../images/png/allcctv.png'
import on from '../../images/png/on.png'
import off from '../../images/png/off.png'


function Card({text}) {
    const DetailCard = (props) => {
        return (
            <CardBox>
                <H1>{props.name}</H1>
                <Content>
                 <Image src={props.img} alt="CCTV" />
                 <Amount>{props.amount}</Amount>
                 <p>ตัว</p>
                </Content>
            </CardBox>
        );
      
    }
  return (
<>
      <DetailCard name="กล้องทั้งหมด" img={allcctv} amount="100" />
      <DetailCard name="กล้องทำงาน" img={on} amount="70" />
      <DetailCard name="กล้องไม่ทำงาน" img={off} amount="30" />
      </>  
  )
}

export default Card