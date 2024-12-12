import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      setCalVal("");
    } else if (buttontext === "=") {
      const result = eval(calVal);
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttontext;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
