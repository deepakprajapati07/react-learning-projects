import styles from "./Button.module.css";

const Button = ({ button }) => {
  return <button className={styles.button}>{button}</button>;
};

export default Button;
