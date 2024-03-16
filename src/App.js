import Header from "./Components/Header/Header";
import MealList from "./Components/MealList/MealList";
import Summary from "./Components/Summary/Summary";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/Cartprovider";

function App() {
const [open,setOpen]= useState(false);

  return (
    <CartProvider>
    <Header setOpen={setOpen}/>
    <Summary/>
    <MealList/>
    { open &&
    <Cart  setOpen={setOpen} />
}
</CartProvider>
  );
}

export default App;
