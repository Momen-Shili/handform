import Header from "../Layout/Header";
import Home from "../pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main
        className="bg-gray-100 text-gray-600 mt-16 relative"
        style={{ minHeight: "90vh" }}
      >
        <Home />
      </main>
    </>
  );
}

export default App;
