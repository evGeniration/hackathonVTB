
import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import "./styles.css"

export const LoginPage = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="container-form-style">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Login</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="firstName"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        <label>Password</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="firstName"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

