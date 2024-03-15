import Header from "./Components/Header/Header";
import MealList from "./Components/MealList/MealList";
import Summary from "./Components/Summary/Summary";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
const [open,setOpen]= useState(false);

  return (
    <div>
    <Header setOpen={setOpen}/>
    <Summary/>
    <MealList/>
    { open &&
    <Cart  setOpen={setOpen} />
}
    </div>
  );
}

export default App;
