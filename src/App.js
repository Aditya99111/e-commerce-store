import './App.css';
import {BrowserRouter as Router , Route } from "react-router-dom"
import Landing from './Landing';
import Porducts from "./Components/Products/Products"
import Cart from "./Components/Cart/Cart"
import AboutPage from "./Components/About/AboutPage"
function App() {
return (
    <div>

    <Router>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/products" component={Porducts}/>
    <Route exact path="/about" component={AboutPage}/>

     </Router>
    </div>
  );
}

export default App;
