import { Link } from "react-router-dom";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

import styles from "./TripCard.module.css";

const TripCard = ({ id, name, budget, category, handleRemove }) => {

    const remove = (e) => {
        //e.preventDefault();
        handleRemove(id)
    }
    return (
        <div className={styles.card_container}>
            <div className={styles.h4_container}>
                <h4>{name}</h4>

            </div>
            <p>
                <span>Orçamento: </span> R${budget}
            </p>
            <p className={styles.category_text}>
                {/* mesmo se as letras vierem maiúsculas ele deixa minúsculas pra funcionar */}
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.trip_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button onClick={() => {
                    if (window.confirm('Tem certeza que deseja excluir essa viagem?')) remove()
                }}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default TripCard