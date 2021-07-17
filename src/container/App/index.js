import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className="bg-gray-100 text-gray-600 mt-16">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route path="/edit" component={Edit} />
          </Switch>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
