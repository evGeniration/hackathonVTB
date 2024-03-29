import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useIsAuth} from "../context/AuthContextProvider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addUser } from "../redux/actions/userAction";
import style from "../components/login.module.css"
import {useHistory} from "react-router";

export const Registr = () => {
  const history = useHistory()
  const { control, handleSubmit, formState: {errors} } = useForm();
  const [age, setAge] = React.useState('');

  const onSubmit = async(data) => {
    const userObject = {
     ...data, role: age
    }
    const response = await addUser(userObject)
    if(response.status === 201){
      history.push('/login')
    }
  };
  const changeState = (event) => {
    setAge(event.target.value);
  }


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
        <FormControl variant="standard"  className={style.select}>
          <InputLabel id="demo-simple-select-standard-label">
            Choose dataset
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            name="selectform"
            value={age}
            onChange={changeState}
            label="Choose dataset"
            required={{
              required: "Please, chose there",
            }}
          >
            <MenuItem value={"romashka"}>romashka</MenuItem>
            <MenuItem value={"VTB"}>VTB</MenuItem>
          </Select>
          {<p>{errors.selectform?.message}</p>}
        </FormControl>
        <div>
          <button className={style.button} type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};
