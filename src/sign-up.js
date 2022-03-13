
import styles from "./sign-up.module.css";
import { Typography, Input,Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Title, Link, Text } = Typography;

function SignUp() {
    const navigate =useNavigate()
  return (
    
      <div className={styles.container}>
        <Title level={1}>Sign up</Title>
        <div className={styles.title}>
          <Text type="secondary">Already have an account?</Text>
          <Link onClick={()=>navigate("/")}>
            Sign in
          </Link>
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <Input placeholder="Email" />
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <Input placeholder="Password" />
        </div>
        <div className={styles.secret}>
          <label htmlFor="secret">Secret</label>
          <Input placeholder="Secret" />
        </div>
        <Button type="primary">Sign Up</Button>
        <Text className={styles.terms} type="secondary">
          By clicking the "Sign Up" button,you are creating an account,and you
          agree to the Terms of Use.
        </Text>
      </div>
    
  );
}

export default SignUp;
