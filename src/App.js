import logo from './logo.svg';
import './App.css';
import AboutSection from './Components/AboutSection.js';
import BandList from './Components/BandList.js';
import Cart from './Components/Cart.js';
import Landing from './Components/Landing.js';
import Map from './Components/Map.js';
import TicketRotation from './Components/TicketRotation.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutSection/>
      <BandList />
      <Map />
      <TicketRotation />
      <Footer />
    </div>
  );
}

export default App;
