import './App.css';
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { Shop } from './components/Shop';
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Card
        link="https://sneharatnani.github.io/shopping-cart/static/media/img1.9d621a9755fae516641b.jpg"
        name="Nike Air Max Pre-Day SE"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id, blanditiis similique laborum sequi, reiciendis voluptates itaque at nobis earum deleniti architecto illum placeat praesentium, ad totam consectetur quaerat aperiam deserunt illo facilis. Hic, obcaecati laborum suscipit animi."
        price="₹4999"
      /> */}
      <Shop />
    </div>
  );
}

export default App;
