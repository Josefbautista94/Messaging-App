import React from 'react';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import NavBar from './Components/Navigation Bar/NavBar.js';
import FrontPage from './Components/Front Page/FrontPage.js';
import About from './Components/About/About.js';
import Chat from './Components/Chat/Chat.js'

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <Switch>

    <Route path ="/" exact component = {FrontPage}/>
    <Route path = "/About" component = {About} />
    <Route path = "/Chatting" component = {Chat}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
