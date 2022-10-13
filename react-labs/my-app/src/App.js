import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Header from './components/Header/header';
import Content from './components/Content/content';
import About from './components/About/about';
import Account from './components/Account/account';
import Contact from './components/Contact/contact';


function App() {
  return (
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Content/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
