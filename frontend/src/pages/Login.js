
import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import "../components/styles.css"
import {useDispatch} from "react-redux";
import {logIn} from "../redux/actions/authAction";

export const Login = () => {
  const { control, handleSubmit } = useForm();
  const dispatch =useDispatch()
  const onSubmit = (data) => {
    dispatch(logIn())
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

