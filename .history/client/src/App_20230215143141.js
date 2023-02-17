// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './Navigation';
import Profile from './Navigation';
import Schools from './Schools';
import SchoolDetail from './SchoolDetail';
import SubmitTip from './SubmitTip';


function App() {
  const [count, setCount] = useState(0);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch("/schools")
      .then((r) => r.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
        <div className="App">
          <Switch>
            <Route path="/profile">
              <Profile />
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
            <Route path="/">
              <h1>Page Count: {count}</h1>
            </Route>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;