// client/src/components/App.js
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserContext } from "../context/user";
import Login from './Login';
import Navigation from './Navigation';
import Profile from './Profile';
import SignUp from './SignUp';
import Schools from './Schools';
import SchoolDetail from './SchoolDetail';
import SubmitTip from './SubmitTip';
import Welcome from './Welcome';

function App() {
  const { user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState(null)

  const [count, setCount] = useState(0);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          setUser(user);
          fetchSchools();
        })
      } else {
        setUser(null)
      }
    })
  },[])

  const fetchSchools = () => {
    fetch('/schools')
    .then(res => {
      if(res.ok){
        res.json().then(setSchools)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  // useEffect(() => {
  //   fetch("/schools")
  //     .then((r) => r.json())
  //     .then((data) => setSchools(data));
  // }, []);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  if(!user) return (
    <BrowserRouter>
      <Navigation />
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/">
              <Welcome />
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  )
  if(errors) return <h1>{errors}</h1>


  return (
    <BrowserRouter>
      <Navigation />
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/schools/:id">
              <SchoolDetail />
            </Route>
            <Route path="/schools">
              <Schools schools={ schools }/>
            </Route>
            <Route path="/submit-a-tip">
              <SubmitTip />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/">
              <Schools schools={ schools }/>
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;