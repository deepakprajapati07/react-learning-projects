import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtonClick = (event) => {
  //   console.log(event)
  //   console.log(`${foodItem} being bought `);
  // };

  return (
    <li className={`${styles.customItem} list-group-item ${bought && 'active'}`}>
      <span className={styles.customSpan}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
