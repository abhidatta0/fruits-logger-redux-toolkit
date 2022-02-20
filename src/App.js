import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import AddFruit from './components/AddFruit';
import FruitList from './components/FruitList';

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-3">
        <AddFruit />
        <FruitList />
      </div>

      {/*  Footer Navbar*/}
      <div className='navbar fixed-bottom'>
        <div className="container mt-3">
          <a href="https://github.com/abhidatta0/fruits-logger-redux-toolkit"  target="_blank" without rel="noreferrer" className='btn btn-outline-dark'>Github</a>
        </div>
      </div>
      
    </Provider>
  );
}

export default App;
