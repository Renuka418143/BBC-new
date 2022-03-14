import "./App.css";
import Header from "./Header/Header";
import Footer from "./footer";
import Home from "./Home";
import Card from "./Header/Card";
import News from "./sections/News";
import Welcome from "./sections/Welcome";
import Homesection from "./Header/Homesection";
import Sport from "./sports";

function App() {
  return (
    <div className="App">
      <Home/>
      <Homesection />
      <News />
      <Sport/>
      <Footer/>
    </div>
  );
}

export default App;
