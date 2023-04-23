import './App.css';
import { Nav } from './components/Nav';
import { Shop } from './components/Shop';
import { Item } from './components/Item';
import { data } from './components/data';
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Shop /> */}
      <Item
        {...data[1]}
      />
    </div>
  );
}

export default App;
