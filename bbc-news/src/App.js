import "./App.css";
import Header from "./Header/Header";
import Footer from "./footer";
import Card from "./Header/Card";
import Home from "./Header/Homesection";
import NEWS from "./Header/News";
import Homesection from "./Header/Homesection";
import News from "./Header/News";

function App() {
  return (
    <div className="App">
      <Header />
      <Homesection />

      <News />
      <Footer/>
    </div>
  );
}

export default App;
