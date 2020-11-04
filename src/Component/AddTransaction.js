import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [Description, setDescription] = useState("");
    const [TransactionAmmount, setTransactionAmmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault();
        if(Description === "" || TransactionAmmount ===0){
            return;
        }else{
       let NewTransaction={
            id:Math.floor(Math.random()*10),
            Description,
            transactionsAmount:parseFloat(TransactionAmmount)
       }
       console.log(NewTransaction)
       addTransaction(NewTransaction);
       setDescription("");
       setTransactionAmmount(0)
    }
      
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control" >
                <label htmlFor="text">Text</label>
                <input type="text" id="text" onChange={(e)=>setDescription(e.target.value)} value={Description} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" id="amount" value={TransactionAmmount} onChange={(e)=>setTransactionAmmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={(e)=>onSubmit(e)}>Add transaction</button>
            </form>
        </div> 
        )
}

export default AddTransaction;
