import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Menu from './component/Menu/Menu'
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Home from './component/Home/Home';
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
function App(props) {
  return (
   <BrowserRouter>
   <Header />
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
     </Switch> 
     <Footer />
   </BrowserRouter>
    
  );
}

export default App;
