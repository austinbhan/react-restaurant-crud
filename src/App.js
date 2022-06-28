import './App.css';
import AuthPage from './AuthPage';
import BookList from './BookList';
import { Link, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { client } from './services/client';

function App() {

  const [user, setUser] = useState(client.auth.user());
    
  return (
    <Router>
      <>
        <div className="App">
          <Switch>
            <Route exact path="/">
              {
                !user // if usser doesn't exist
                  ? <AuthPage setUser={ setUser }/> // render auth page
                  : < Redirect to="/book-list" /> // otherwise redirect to list page
              }
            </Route>
            <Route exact path="/book-list">
              <BookList />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
