import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/Schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AUTH_URL } from "../../utils/api";
import AuthContext from "../../context/AuthContext";

function LoginForm() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const login = async (formData) => {
    const responseData = await axios.post(AUTH_URL, {
      identifier: formData.email,
      password: formData.password,
    });

    console.log("Response Data: ", responseData);

    setAuth(responseData.data.jwt);

    navigate("/admin");
  };

  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    login(formData).catch(console.error);
  };
  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter your email
          <input {...register("email")} />
          {errors.email && (
            <span className="loginForm__error">{errors.email.message}</span>
          )}
        </label>

        <label>
          Enter your password
          <input {...register("password")} type="password" />
          {errors.password && (
            <span className="loginForm__error">{errors.password.message}</span>
          )}
        </label>

        <button>Send</button>
      </form>
    </>
  );
}

export default LoginForm;
