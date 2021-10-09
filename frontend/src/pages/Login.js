
import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import "../components/styles.css"
import {useDispatch} from "react-redux";
import {logIn} from "../redux/actions/authAction";
import {useIsAuth} from "../context/AuthContextProvider";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addUser } from "../redux/actions/userAction";

export const Login = () => {
  const { control, handleSubmit } = useForm();
  const [age, setAge] = React.useState('');
  const dispatch =useDispatch()
  const {setIsAuth} = useIsAuth()

  const onSubmit = async(data) => {
    // setIsAuth(true)
    const userObject = {
     ...data, role: age
    }
    
    console.log(userObject)
    await addUser(data)
  };
  const changeState = (event) => {
    setAge(event.target.value);
  }


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
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          value={age}
          onChange={changeState}
          label="Choose dataset"
        >

          <MenuItem value={"Romashka"}>Romashka</MenuItem>
          <MenuItem value={"VTB"}>VTB</MenuItem>
        
        </Select>
      </FormControl>
        <input type="submit" />
      </form>
    </div>
  );
};

