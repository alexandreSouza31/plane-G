import { BsPencil,BsFillTrashFill } from "react-icons/bs";

import styles from "./TripCard.module.css";

const TripCard = ({id,name,budget,category,handleRemove}) => {
    return (
        <div className={styles.card_container}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento: </span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span></span> {category}
            </p>
            <div>
                <p>editar</p>
                <p>remover</p>
            </div>
        </div>
    )
}

export default TripCard