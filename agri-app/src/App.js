import logo from './logo.svg';
import Header from './Components/Header/Header';
import Item from './Components/Item/Item';




function App() {
  return (
    <div className="App">
      <Header/>
      <Item icon = {logo} />
    </div>
  );
}

export default App;
