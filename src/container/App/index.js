import { useReducer } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalState, initialState, reducer } from "../config/contextAPI";
import Header from "../Layout/Header/";
import Edit from "../pages/Edit/";
import Home from "../pages/Home";
import "./App.css";
import Modal from "../Layout/Modal";

function App() {
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, initialState);
  const mode = {
    color: state.isDark ? "#eee" : "#999",
    backgroundColor: state.isDark ? "#374151" : "#F3F4F6",
    transition: "all .5s ease",
    WebkitTransition: "all .5s ease",
    MozTransition: "all .5s ease",
  };

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      <div style={mode} className="min-h-screen">
        <Header />
        <main className="pt-16">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route path="/edit" component={Edit} />
            </Switch>
          </AnimatePresence>
        </main>
        <Modal />
      </div>
    </GlobalState.Provider>
  );
}

export default App;
