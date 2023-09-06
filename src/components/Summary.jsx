import styles from "./Summary.module.css";
import SummaryItem from "./SummaryItem.jsx";
import data from "../data.json";

const Summary = () => {
  console.log(data);

  return (
    <div
      className={`${styles.summary} ${styles.gridFlow}`}
      data-spacing="large"
    >
      <h2 className={styles.sectionTitle}>Summary</h2>
      <div className={styles.gridFlow}>
        {data.map((itemData, index) => (
          <SummaryItem
            key={index}
            data={itemData}
            icon={itemData.icon}
            score={itemData.score}
            category={itemData.category}
            itemType={`accent-${index + 1}`}
          />
        ))}
      </div>
      <button className={styles.button}>Continue</button>
    </div>
  );
};

export default Summary;
