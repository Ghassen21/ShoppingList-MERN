import AppNav from "./components/AppNav"
import ShoppingList from "./components/ShoppingList"
import {Provider} from 'react-redux';
import store from "./redux/store"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ItemModal from "./components/ItemModal";
import {Container} from 'reactstrap';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <AppNav/>
     <Container>
     <ItemModal/>
     <ShoppingList/>
     </Container>
    </div>
    </Provider>
  );
}

export default App;
