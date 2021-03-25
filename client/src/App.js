import AppNav from "./components/AppNav"
import ShoppingList from "./components/ShoppingList"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="App">
     <AppNav/>
     <ShoppingList/>
    </div>
  );
}

export default App;
