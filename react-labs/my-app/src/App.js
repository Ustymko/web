import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Header from './components/Header/header';
import Catalog from './components/Catalog/catalog';
import Cart from './components/Cart/cart';
import Home from './components/Home/home';
import Footer from "./components/Footer/footer";


function App() {
  return (
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
