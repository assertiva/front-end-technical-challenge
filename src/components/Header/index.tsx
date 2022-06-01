import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={'/images/assertiva-icon.svg'} alt="" />
        <h2>Desempenho das Lojas</h2>
      </div>
    </header>
  );
}
