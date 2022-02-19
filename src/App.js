import './App.css';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div>
      Hello
    </div>
    </Provider>
  );
}

export default App;
