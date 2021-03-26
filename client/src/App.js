import AppNav from "./components/AppNav"
import ShoppingList from "./components/ShoppingList"
import {Provider} from 'react-redux';
import store from "./redux/store"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <AppNav/>
     <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;
