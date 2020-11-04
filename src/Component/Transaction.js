import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Transaction({transaction}) {
    const {deleteTransaction} =useContext(GlobalContext)

    const del=(id)=>{
        deleteTransaction(id);
    }

    return (
      
            <li className={transaction.transactionsAmount >0 ? 'plus' : 'minus'}>
                 {transaction.Description} <span>{transaction.transactionsAmount}</span><button onClick={()=>del(transaction.id)} class="delete-btn">x</button>
            </li>
         
    )
}

export default Transaction
