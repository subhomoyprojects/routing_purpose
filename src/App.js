import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Datashow from './components/Datashow';
import Fetchval from './components/Fetchval';
import Menu from './components/Menu';
import Passobj from './components/Passobj';
import Test from './components/Test';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' component={Menu} />
        <Route path='/test' component={Test} />
        <Route path='/fetchval/:userid' component={Fetchval} />
        <Route path='/datashow' component={Datashow}/>
        <Route path='/passobj' component={Passobj} />
      </BrowserRouter>
    </>
  );
}

export default App;
