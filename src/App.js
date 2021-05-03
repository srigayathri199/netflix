import React ,{useEffect}from 'react';
import './App.css';
import Homescreen from './screen/Homescreen';
import LoginScreen from './screen/LoginScreen.js';
import ProfileScreen from './screen/ProfileScreen';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {auth} from './firebase';
import {useDispatch,useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //if the user refreshes being logged in,we will be in same page as user didnot logged out as browser stores cookies
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        dispatch(login({
          uid:userauth.uid,
          email:userauth.email
        }))
        // console.log(userauth);
      }else{
        dispatch(logout()) 
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">

      <Router>
        {!user?(
          <LoginScreen />
        ): (
        <Switch>

          <Route exact path="/profile">
            <ProfileScreen />
          </Route>

          <Route exact path="/">
            <Homescreen />
          </Route>

        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
