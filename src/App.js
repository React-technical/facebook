import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="app">
     <Router>
       <Switch>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/register">
           <Register/>
         </Route>
       </Switch>
       <Link to="/register" style={{textDecoration:'none'}}>
                                <h5 className="rtd">SignUp</h5>
                            </Link>
                            <Link to="/login" style={{textDecoration:'none'}}>
                                <h5 className="rtd">Login</h5>
                            </Link>
     </Router>
    </div>
  );
}

export default App;
