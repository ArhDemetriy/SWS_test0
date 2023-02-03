import styles from './App.module.scss';
import { CustomTable } from './features/CustomTable/CustomTable';

function App() {
  return (
    <div className="App">
      <div className={styles['App__columns']}>
        <CustomTable />
      </div>
    </div>
  );
}

export default App;