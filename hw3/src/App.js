import styles from './App.module.css';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div className={styles.app}>
      <span className={styles.helper}>====== Home =====</span>
      <MainPage />
      <span className={styles.helper}>====== About =====</span>
      <AboutPage />
      <span className={styles.helper}>====== Todos =====</span>
      <TodosPage />
    </div>
  );
}

export default App;
