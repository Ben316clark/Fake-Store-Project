import { getStoreData } from './Functions/ApiMainFunc';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  getStoreData();
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="column d-flex-start"></div>
            <div className="column d-flex justify-content-center">
        <h1 className="MainTitle">Tailored Brands</h1>
        </div>
        <div className="column flex-inline d-flex justify-content-end">
        <ul className ="Nav-list">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Checkout</li>
        </ul>
        </div>
        </div>
        </div>
      </header>

    </div>
  );
}

export default App;
