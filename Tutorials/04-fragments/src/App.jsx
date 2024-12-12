import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`"New Food Value Entered is ${newItems}`);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMsg items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
}

export default App;
