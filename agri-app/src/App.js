import logo from './logo.svg';
import Header from './Components/Header/Header';
import Item from './Components/Item/Item';
import Headphones from './Components/Item/Headphones.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Item itemimg={Headphones} amount="1000" title="Headphones" />
    </div>
  );
}

export default App;
