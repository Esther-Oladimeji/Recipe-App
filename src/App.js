import Pages from "./pages/Pages";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mynav from "./components/Mynav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./components/Category";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Mynav />

        <Pages />
        <Footer />
      </Router>
    </div>
  );
}
