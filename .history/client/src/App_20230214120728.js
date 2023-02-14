// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from './Navigation';
import Schools from './Schools';
import Submit from './Schools';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
        <div className="App">
          <Switch>
            <Route path="/schools">
              <Schools />
            </Route>
            <Route path="/submit-a-tip">
              <Schools />
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