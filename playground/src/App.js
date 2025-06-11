import logo from './logo.svg';
import './App.css';
import { Button } from 'common-components'; 

function App() {
  return (
    <div className="App">
       <Button label="Click Me!" onClick={()=> alert('Hello')} disabled={true} style={{color: 'green'}}/>
    </div>
  );
}

export default App;
