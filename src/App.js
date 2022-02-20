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
    </Provider>
  );
}

export default App;
