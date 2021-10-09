
import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import axios from "axios";
import {addUser } from "../../redux/actions/userAction"
import {Link} from 'react-router-dom'
import {useHistory} from "react-router";
import "../login/styles.css"

export const RegistrationPage = () => {
  const { control, handleSubmit } = useForm();
  const history = useHistory()

  const onSubmit = async(data) => {
    await addUser(data) 
    history.push("/login")
  };

  return (
    <div className="container-form-style">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Login</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="login"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        <label>Password</label>
        <Controller
          render={({ field }) => <Input {...field} />}
          name="password"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

