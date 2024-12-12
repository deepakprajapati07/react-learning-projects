import Button from "./Button";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonName.map((buttonSign) => (
        <Button button={buttonSign} />
      ))}
    </div>
  );
};

export default ButtonsContainer;
