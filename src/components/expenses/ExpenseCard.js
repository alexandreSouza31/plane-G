import styles from "../trip/TripCard.module.css"

import {BsFillTrashFill} from "react-icons/bs"

const ExpenseCard = ({ id, name, cost, description, handleRemove }) => {
    const remove = (e) => {
        //
    }
    return (
        <div className={styles.card_container_expense}>
            <div className={styles.h4_container}>
                <h4>{name}</h4>
            </div>
            <p>
                <span>Custo total: </span>R$ {cost}
            </p>
            <p className={styles.description_expense}>{description}</p>
            <div className={styles.trip_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/>Excluir
                </button>
            </div>
        </div>
    )
}

export default ExpenseCard