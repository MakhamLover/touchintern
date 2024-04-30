import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BG,
  LoginContainer,
  LoginBox,
  Logo,
  LogoStyled,
  LoginForm,
  Button1
} from "./loginStyled";
import logo from "../../images/png/logo.png";
import { Button, Checkbox, Flex, Form, Input } from "antd";



function Login() {

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const navigate = useNavigate();
  const correctID = "nam";
  const correctPassword = "1234";

  const [enteredID, setEnteredID] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);

    if (enteredID === correctID && enteredPassword === correctPassword) {
      console.log("ไอดีและรหัสผ่านถูกต้อง");
      navigate('/home'); 

    } else {
      console.log("ไอดีหรือรหัสผ่านไม่ถูกต้อง");
      alert("ไอดีหรือรหัสผ่านไม่ถูกต้อง");
    }
  };
  

  
  
 
  return (
  
    <BG>
      
      <LoginContainer>
        <LoginBox>
          <LogoStyled>
            <Logo src={logo}></Logo>
          </LogoStyled>
          <LoginForm>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="ชื่อผู้ใช้งาน"
                  name="usernameInput"
                  value={enteredID}
                  onChange={(e) => setEnteredID(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกชื่อผู้ใช้",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="รหัสผ่าน"
                  name="passwordInput"
                  value={enteredPassword}
                  onChange={(e) => setEnteredPassword(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกรหัสผ่าน",
                    },
                  ]}
                  style={{ borderColor: enteredID !== correctID || enteredPassword !== correctPassword ? 'red' : '' }}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>จดจำฉัน</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button1  type="primary" htmlType="submit">
                    ยืนยัน
                  </Button1>
                </Form.Item>
              </Form>
            </div>
          </LoginForm>
        </LoginBox>
      </LoginContainer>

    </BG>
    
  );
}

export default Login;
