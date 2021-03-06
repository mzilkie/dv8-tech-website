import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LandingPage from '../../views/LandingPage/LandingPage';
import About from '../../views/About/About';
import Careers from '../../views/Careers/Careers';
import Pricing from '../../views/Pricing/Pricing';
import NotFound from '../../views/NotFound/NotFound';
import Contact from '../../views/Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/about' component={About} />
              <Route exact path='/careers' component={Careers} />
              <Route exact path='/pricing' component={Pricing} />
              <Route exact path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
