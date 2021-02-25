import './App.css';
import NavbarComponent from './components/NavbarComponent';
import MainComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddPlayerComponent from './components/AddPlayerComponent';

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/add" component={AddPlayerComponent} />
        </Switch>
      </Router>

      {/* <MainComponent /> */}
    </div>
  );
}

export default App;
