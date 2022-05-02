import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../utils/Schemas";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (formData) => {
    console.log("Form Data: ", formData);

    //loginUser(formData).catch(console.error);
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
