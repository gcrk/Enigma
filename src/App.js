import './style/App.css';
import Home from './components/Home.js'
import Rules from './components/Rules.js'
import About from './components/About.js'
import End from './components/End.js'
import Enigma1 from './Enigmas/Enigma1.js'
import Enigma2 from './Enigmas/Enigma2.js'
import Enigma3 from './Enigmas/Enigma3.js'
import Enigma4 from './Enigmas/Enigma4.js'
import Navbar from './components/Navbar.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/rules" exact component={Rules} />
          <Route path="/about" exact component={About} />
          <Route path="/4" exact component={End} />
          <Route path="/1" exact component={Enigma1} />
          <Route path="/2" exact component={Enigma2} />
          <Route path="/3" exact component={Enigma3} />
          

        </Switch>
      </div>
    </Router>
  );
}

export default App;
