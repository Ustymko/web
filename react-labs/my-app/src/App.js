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
import Item from "./components/Item/item";
import AcceptationForm from "./components/AcceptationForm/acceptation_form";
import Success from "./components/Success/success";

function App() {
  return (
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/success" element={<Success/>}/>
            <Route path="/acceptation_form" element={<AcceptationForm/>}/>
            <Route path="/item" element={<Item/>}/>
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
