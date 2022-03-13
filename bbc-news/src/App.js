import './App.css';
import Header from './Header/Header';
import Card from './Header/Card';
import Home from './Header/Homesection';
import NEWS from './Header/News';
import Homesection from './Header/Homesection';
import News from './Header/News';

function App() {
  return (
    <div className="App">
       <Header />
       <Homesection />
       <h1>NEWS</h1>
       <Card  title='Card Title'
     imgeUrl='https://www.bbc.com/news/world-europe-60687203'
     body=''
      />
  <News />
    </div>
  );
}

export default App;
