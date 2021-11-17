import './App.css';
import Home from './containers/homepage';
import Login from './containers/login';
import Register from './containers/register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    // <div>
    //   <Login />
    // </div>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/register" component={Register} exact />      
        <Route path="/home" component={Home} exact />        
        <Route path="/" component={Login} exact />
      </Switch>  
    </Router>
  );
}

export default App;
