import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";

function ExpenseItem(props) {

    //First is var second is always method = use state returns array
    const [title, setTitle] = useState(props.title);
    //To change vars dynamically


    //Function on click
    const clickHandler=()=>{
       setTitle("Updated!!!");
    }

//Calling Expense Date Component passing the date prop received from app
    return(
    <Card className="expense-item">

        <ExpenseDate date={props.date}  />

        <div className={'expense-item__description'}>
            <h2>{title}</h2>
            <div className={"expense-item__price"}>${props.amount}</div>
        </div>

        <button onClick={clickHandler}>Change Title</button>
    </Card>);
//Prop as an event listener "on" something
}

export default ExpenseItem;