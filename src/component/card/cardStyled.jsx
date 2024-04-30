import styled from "styled-components";

export const CardBox = styled.div`
    display: block;
    width: 360px;
    height:150px;
    background-color: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;  
`;
export const H1 = styled.h1`
    opacity: 50%;
    font-size: 16px;
    margin-left: 10px;
    margin-top: 20px;
`;
export const Content = styled.div`
    font-size: 16px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        font-family: "Prompt";
        font-weight: bold;
        opacity: 50%;
    }
`;
export const Image = styled.img`
   width:80px;
`;
export const Amount = styled.h2`
   font-size: 50px;
   margin: 0;
   color: #000000;
`;

