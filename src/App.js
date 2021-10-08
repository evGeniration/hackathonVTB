import logo from './logo.svg';
import './App.css';
import {fetchUsers} from "./redux/actions";
import {useDispatch} from "react-redux";
import {LoginPage} from "./Components/LoginPage"



function App() {

  const dispatch = useDispatch()
  dispatch(fetchUsers())

  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;
