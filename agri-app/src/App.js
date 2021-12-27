import logo from './logo.svg';
import Header from './Components/Header/Header';
import Item from './Components/Item/Item';
import Headphones from './Components/Item/Headphones.jpg'
import Mobile from './Components/Item/mobile.png'
import Perfume from './Components/Item/perfume.jpeg'
import Gatorade from './Components/Item/gatorade.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Item itemimg={Headphones} amount="1000" title="Headphones" />
      <Item itemimg={Mobile} amount="30000" title="Mobile Phone" />
      <Item itemimg={Perfume} amount="900" title="Perfume" />
      <Item itemimg={Gatorade} amount="200" title="Gatorade" />
    </div>
  );
}

export default App;
