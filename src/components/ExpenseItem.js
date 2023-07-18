import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
            // alert()
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    const plusStyle= {
        backgroundColor: 'lightgreen',
        color: 'white',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const minusStyle= {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        };
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={plusStyle} onClick={event => increaseAllocation(props.name)}>+</button></td>
        <td><button style={minusStyle} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='3em' color="black" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );


};

export default ExpenseItem;
