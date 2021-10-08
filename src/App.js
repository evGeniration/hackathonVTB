import logo from './logo.svg';
import './App.css';
import {fetchUsers} from "./redux/actions";
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch()
  dispatch(fetchUsers())

  return (
    <div className="App">
    123
    <p></p>
    </div>
  );
}

export default App;
