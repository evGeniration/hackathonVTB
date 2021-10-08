import React,{useEffect} from "react";

import './App.css';
import {fetchUsers} from "./redux/actions/userAction";
import {useDispatch, useSelector} from "react-redux";
import {minusOneAction, plusOneAction} from "./redux/actions/countAction";

function App() {
  const users=useSelector(state=>state.users.users)
    const count=useSelector(state=>state.count.count)
  const dispatch=useDispatch()

  return (
    <div className="App">
      <pre>
        Count :{count}
      </pre>
        <button onClick={()=>dispatch(plusOneAction())}>+1</button>
        <button onClick={()=>dispatch(minusOneAction())}>-1</button>
        <br/>
            <button onClick={()=>dispatch(fetchUsers())}>Fetch Users</button>
      <ul>
        {users.map((el,index)=><li key={index}>{el.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
