import './App.css';
import AuthPage from './AuthPage';
import BookList from './BookList';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
import { logOut } from './services/fetch-utils';
import { client } from './services/client';

function App() {

  const [user, setUser] = useState(client.auth.user());

  async function handleLogOut() {
    await logOut();
    setUser('');
    window.location.replace('/');
  }
    
  return (
    <Router>
      <header className="header">
        <nav>
          <li>{ user &&
            <button onClick={handleLogOut}>Sign Out</button>
          }</li>
          <Link to="./Create">Create Book</Link>
        </nav>
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {
              !user // if user doesn't exist
                ? <AuthPage setUser={ setUser }/> // render auth page
                : < Redirect to="/book-list" /> // otherwise redirect to list page
            }
          </Route>
          <Route exact path="/book-list">
            <BookList />
          </Route>
          <Route>
            <Create exact path="/create-book"/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
