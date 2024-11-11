import * as React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification, defaultTheme } from "react-admin";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import "./login.scss";
import LoginForm from "./LoginForm";

const CLASS_NAME = "login-page";

const Login = ({ theme }: any) => {
  const BASE_URI = process.env.REACT_APP_SERVER_URL;

  return (
    <ThemeProvider theme={createTheme(defaultTheme)}>
      <div className={`${CLASS_NAME}`}>
        <div className={`${CLASS_NAME}__wrapper`}>
          <div className={`${CLASS_NAME}__box`}>
            <img
              src="https://amplication.com/assets/react-admin.png"
              alt="React-Admin"
            />
            <h2>Admin UI</h2>
            <div className={`${CLASS_NAME}__box__message`}>
              Sign in to a React-Admin client with ready-made forms for creating
              and editing all the data models of your application
            </div>
            <LoginForm />
          </div>
          <Notification />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
