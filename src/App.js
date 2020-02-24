import React, { useEffect } from "react";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateEntry from "./components/createEntry/createEntry";
import Login from "./components/login/login";
import AboutUs from "./components/aboutUs/aboutUs";
import BrewingBeer from "./components/brewingBeer/brewingBeer";
import Events from "./components/events/events";
import Testing from "./components/testing/testing";
import signup from "./components/signup/signup";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import EntryDetails from "./components/entry/EntryDetails";

const MyRoute = props => {
  useEffect(() => window.scrollTo(0, 0));
  return <Route {...props} />;
};

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <MyRoute exact path="/" component={Homepage} />
        <MyRoute path="/details/:id" component={EntryDetails} />
        <MyRoute path="/entry-brewing/:id" component={EntryDetails} />
        <MyRoute path="/entry-testing/:id" component={EntryDetails} />
        <MyRoute path="/entry-events-new/:id" component={EntryDetails} />
        <MyRoute path="/entry-events-old/:id" component={EntryDetails} />
        <MyRoute path="/about-us" component={AboutUs} />
        <MyRoute path="/brewing" component={BrewingBeer} />
        <MyRoute path="/events" component={Events} />
        <MyRoute path="/testing" component={Testing} />
        <MyRoute path="/contact" component={Contact} />
        <MyRoute path="/create" component={CreateEntry} />
        <MyRoute path="/login" component={Login} />
        <MyRoute path="/signup" component={signup} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
