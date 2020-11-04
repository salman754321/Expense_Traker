import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

function History() {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    return (
        <div>
          <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((e)=>
                  <Transaction key={e.id} transaction={e}/>  
            )}
             </ul> 
        </div>
    )
}

export default History;
