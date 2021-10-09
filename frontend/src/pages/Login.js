import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import {Link} from 'react-router-dom'
import { Input } from "@material-ui/core";
import {useDispatch} from "react-redux";
import {logIn} from "../redux/actions/authAction";
import {useIsAuth} from "../context/AuthContextProvider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { checkUser } from "../redux/actions/userAction";
import style from "../components/login.module.css"
import { width } from "@mui/system";

export const Login = () => {
  const { control, handleSubmit, formState: {errors} } = useForm();
  const dispatch =useDispatch()

  const onSubmit = async(data) => {
    await checkUser(data).then(res => setIsAuth(res))

  };

  const {setIsAuth} = useIsAuth()


  return (
    <div className={style.containerFormStyle}>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label}>Login</label>
        <Controller
          render={({ field }) => <Input className={style.input} {...field} />}
          rules={{
            required: "Please, enter your login.",
          }}
          name="login"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        {<p className={style.p}>{errors.login?.message}</p>}
        <label className={style.label}>Password</label>
        <Controller
          render={({ field }) => <Input className={style.input} {...field} />}
          rules={{
            required: "Are you kidding?",
          }}
          name="password"
          control={control}
          defaultValue=""
          className="materialUIInput"
        />
        {<p className={style.p}>{errors.password?.message}</p>}
        <div>
          <button className={style.button} type="submit">
            Отправить
          </button>
        </div>
        <div className={style.linkContainer}>
        <Link to="/reg">Do you still have no account?</Link>
        </div>
      </form>
    </div>
  );
};