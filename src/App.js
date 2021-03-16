import './App.css';
import {Switch, Route} from 'react-router-dom' ;


import HomePage from './pages/homepage/homepage.component';

const Hatspage = () => (
  <div>
    <h1>
      HATS PAGE
    </h1>
  </div>
)

function App() {
  return (
    <Switch>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hatspage}/>
    </div>
    </Switch>
    
  )
}

export default App;
