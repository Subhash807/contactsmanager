import styles from "./sign-in.module.css";
import { Typography, Input,Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

const { Title,Link, Text } = Typography;

function SignIn() {
    const navigate =useNavigate()
  return (
    
      <div className={styles.container}>
        <Title level={1}>Sign In</Title>
        <div className={styles.title}>
          <Text type="secondary">Don't have an account?</Text>
          <Link onClick={()=>navigate("/signup")}>
            Sign up
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
        <Link
          className={styles.forgotPassword}
          href="https://ant.design"
          target="_blank"
        >
          Forgot password?
        </Link>
        <Button type="primary" onClick={()=>navigate("/contacts")}>Sign in</Button>
      </div>
    
  );
}

export default SignIn;
