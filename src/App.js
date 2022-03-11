// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Treanding from "./Pages/Treanding/Treanding";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";




function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="app"><Container>
        <Switch>
          <Route path='/' component={Treanding} exact />
          <Route path='/Movies' component={Movies} />
          <Route path='/Search' component={Search} />
        </Switch>
      </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>

  );

}

export default App;
