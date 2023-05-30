import styles from "../trip/TripForm.module.css";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { useState } from "react";

const ExpensesForm = ({ handleSubmit, btnText, tripData }) => {//props
    
    const [expense,setExpense]=useState({})

    const submit = (e) => {
        e.preventDefault()
        tripData.expenses.push(expense)
        handleSubmit(tripData)
      }

    function handleChange(e) {
        setExpense({...expense,[e.target.name]:e.target.value})//faço o spread operator pra pegar a despesa atual
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome da despesa"
                name="name"
                placeholder="digite o nome da despesa"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Valor da despesa"
                name="cost"
                placeholder="digite o valor da despesa"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="descrição da despesa"
                name="description"
                placeholder="descreva a despesa"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText } />
        </form>
    )
}

export default ExpensesForm