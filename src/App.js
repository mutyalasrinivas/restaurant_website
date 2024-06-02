import Header from "./components/Layout/Header"; 
import Summary from "./components/Layout/Summary";
import Body from "./components/Meals/Body";
  import CartProvider from "./store/CartProvider"; 
function App() {
  return (
    <div className="App">
    <CartProvider>
     <Header/>
     <Summary/>
     <Body/>
    </CartProvider>
    </div>
  );
}

export default App;
