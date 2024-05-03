import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import styles from './Components/App.module.css';

function App() {
  return (
    <div className='APP'>
      <Hello/>
      <div className={styles.box} />
    </div>
  );
}

export default App;
