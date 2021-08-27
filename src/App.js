import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AskBIT from "./component/AskBIT";
import Login from "./component/auth/Login";
import { auth } from "./firebase";
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user= useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch(
          login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            displayName:authUser.displayName,
            email:authUser.email,
            
          })
        );
      } else{
        dispatch(logout())
      }
      console.log(authUser);
    });
  }, [dispatch]);

  return <div className="App">{user ?<AskBIT />:<Login />}</div>;
}

export default App;
