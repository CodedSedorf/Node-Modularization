import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  let endpoint = "http://localhost:3500/users";
  const getData = ()=>{
    axios.get(endpoint)
    .then((response) =>{
      console.log(response);
    })

  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
