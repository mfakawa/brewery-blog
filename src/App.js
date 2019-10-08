import React from 'react';
import Footer from './components/footer/footer';
import Homepage from './components/homepage/homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateEntry from './components/createEntry/createEntry';
import Login from './components/login/login';
import AboutUs from './components/aboutUs/aboutUs';
import BrewingBeer from './components/brewingBeer/brewingBeer';
import Events from './components/events/events';
import Testing from './components/testing/testing';
import signup from './components/signup/signup';
import Navbar from './components/navbar/navbar';
import Contact from './components/contact/contact';
import EntryDetails from './components/entry/entryDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/details/:id' component={EntryDetails} />
          <Route path='/entry-brewing/:id' component={EntryDetails} />
          <Route path='/entry-testing/:id' component={EntryDetails} />
          <Route path='/entry-events-new/:id' component={EntryDetails} />
          <Route path='/entry-events-old/:id' component={EntryDetails} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/brewing' component={BrewingBeer} />
          <Route path='/events' component={Events} />
          <Route path='/testing' component={Testing} />
          <Route path='/contact' component={Contact} />
          <Route path='/create' component={CreateEntry} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={signup} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
