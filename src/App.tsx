import styles from './App.module.scss';
import { CustomTable } from './features/CustomTable/CustomTable';

function App() {
  return (
    <div className="App">
      <div className={styles['App__columns']}>
        <CustomTable />
        {/* <CustomTreeView /> */}
        {/* <Counter /> */}
        {/* <CustomSelect /> */}
      </div>
    </div>
  );
}

export default App;