import './App.css';
import AuthPage from './AuthPage';
import BookList from './BookList';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
import { logOut } from './services/fetch-utils';
import { client } from './services/client';
import Edit from './Edit';

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
          { user &&
            <button onClick={handleLogOut}>Sign Out</button>
          }
          <Link to="/create-book">Add a Book</Link>
        </nav>
      </header>
      <div className="App">
        <Route exact path="/">
          {
            !user // if user doesn't exist
              ? <AuthPage setUser={ setUser }/> // render auth page
              : <Redirect to="/book-list" /> // otherwise redirect to list page
          }
        </Route>
        <Switch>
          <Route exact path="/book-list"> 
            {/* Books List  */}
            <BookList />
          </Route>
          <Route exact path="/create-book">
            {/* Add an Entry  */}
            <Create />
          </Route>
          <Route exact path='/books/:id'>
            {/* Edit Books  */}
            <Edit />
          </Route>
          
        </Switch>
      </div>

    </Router>
  );
}

export default App;
