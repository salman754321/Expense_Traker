
import './App.css';
import AddTransaction from './Component/AddTransaction';
import Balance from './Component/Balance';
import Header from './Component/Header';
import History from './Component/History';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <div className="container">
     <GlobalProvider>
     <Header ></Header>
      <Balance ></Balance>
      <History></History>
      <AddTransaction></AddTransaction>   
     </GlobalProvider>
      </div> 
    
    </div>
  );
}

export default App;
