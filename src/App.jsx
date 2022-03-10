import logo from './logo.svg';
import './App.css';
import { Product } from './components/Products';
import { Routes ,Route} from 'react-router-dom';
import { Cartpage } from './components/Cart';
import { Navbar } from './components/Navbar';
import { Check } from './components/Check';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/drive-u' element={<Product/>}></Route>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/cart' element={<Cartpage/>}> </Route>
        <Route path='/checkout' element={<Check/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
