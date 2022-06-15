import React from "react";
import { LoginForm } from "../../components/login-form/Loginform";
import DefaultLayout from "../layouts/DefaultLayout";

const LoginPage = () => {
  return (
    <div>
      <DefaultLayout>
        <LoginForm />
      </DefaultLayout>
    </div>
  );
};

export default LoginPage;
