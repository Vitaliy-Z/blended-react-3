import styles from './CountryInfo.module.css';

const CountryInfo = ({ item }) => {
  const { flag, capital, countryName, languages = [], population } = item;

  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>
        <img className={styles.img} src={flag} alt={`Flag of ${countryName}`} />
      </div>
      <div className={styles.box}>
        <h3 className={styles.capital}>
          Capital:
          <span className={styles.accent}>
            {countryName === 'Russian Federation' ? '---' : capital}
          </span>
        </h3>

        <h1 className={styles.title}>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </h1>

        <p className={styles.details}>
          Population: <span className={styles.accent}>{population}</span>
        </p>

        <p className={styles.details}>
          Languages:
          <span className={styles.accent}>{languages.join(', ')}</span>
        </p>

        {countryName === 'Russian Federation' && (
          <h4 className={styles.title}>Glory to Ukraine</h4>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
