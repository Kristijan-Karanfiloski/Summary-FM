import styles from "./Results.module.css";

const Results = () => {
  return (
    <div
      className={`${styles.results} ${styles.gridFlow}`}
      data-spacing="large"
    >
      <h1 className={styles.sectionTitle}>Your Result</h1>
      <p className={styles.resultScore}>
        <span>76</span>of 100
      </p>
      <div className={styles.gridFlow}>
        <p className={styles.resultRank}>Great</p>
        <p>
          You scored higher then 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Results;
