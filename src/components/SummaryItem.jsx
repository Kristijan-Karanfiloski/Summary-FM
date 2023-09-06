import styles from "./SummaryItem.module.css";

const SummaryItem = ({ icon, score, category, itemType }) => {
  return (
    <div className={styles.summaryItem} data-item-type={itemType}>
      <div className={styles.flexGroup}>
        <img src={icon} alt="icon" />
        <h3 className={styles.summaryItemTitle}>{category}</h3>
      </div>
      <p className={styles.summaryScore}>
        <span>{score}</span> / 100
      </p>
    </div>
  );
};

export default SummaryItem;
