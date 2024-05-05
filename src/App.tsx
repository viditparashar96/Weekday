import Home from "./_root/pages/Home/Home";
import "./App.css";
import Disclaimer from "./components/shared/Disclaimer";
const App = () => {
  return (
    <div className="container">
      <Disclaimer />

      <Home />
    </div>
  );
};

export default App;
