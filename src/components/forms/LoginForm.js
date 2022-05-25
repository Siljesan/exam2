import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/Schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AUTH_URL } from "../../utils/api";
import AuthContext from "../../context/AuthContext";
import { Heading } from "../styles/StyledHeadings";

function LoginForm() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState();

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

    setAuth(responseData.data.jwt);

    navigate("/admin");
    console.log(auth);
  };

  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    login(formData).catch((error) => setError(error));
  };

  return (
    <>
      {error ? (
        <div className="loginForm__error">
          <p>Please enter the right credentials</p>
        </div>
      ) : (
        ""
      )}
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
