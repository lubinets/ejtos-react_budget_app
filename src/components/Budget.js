import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const updateBudget = (event) => {
        const budgetValue = event.target.value === "" ? 0 : parseInt(event.target.value);
        if (budgetValue > 20000) {
          alert("The value cannot exceed £20000");
          dispatch({ type: 'SET_BUDGET', payload: "20000" });
        } else if (budgetValue < totalExpenses) {
          alert(`You cannot reduce the budget value lower than the current spending (${totalExpenses})`);
          dispatch({ type: 'SET_BUDGET', payload: totalExpenses });
        } else {
          dispatch({ type: 'SET_BUDGET', payload: budgetValue });
        }
      }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
                            type="number"
                            defaultValue={budget}
                            step="10"
                            min={totalExpenses}
                            max="20000"
                            id="number" 
                            onInput = {(event) => updateBudget(event)}>
                            </input>
            </span>
        </div>
    );
};
export default Budget;
