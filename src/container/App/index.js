import { useReducer } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalState, initialState, reducer } from "../config/contextAPI";
import Header from "../Layout/Header";
import Edit from "../pages/Edit/";
import Home from "../pages/Home";
import "./App.css";

function App() {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      <Header />
      <main className="bg-gray-100 text-gray-600 mt-16">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} />
          </Switch>
        </AnimatePresence>
      </main>
    </GlobalState.Provider>
  );
}

export default App;
