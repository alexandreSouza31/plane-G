import styles from "./TripForm.module.css"

function TripForm() {
    
    return(
        <form className={styles.form_new_trip}>
            <input type="text" placeholder="Qual o nome dessa viagem?"></input>
            <input type="number" placeholder="Qual o orçamento disponível?"></input>
            <select name="category_id">
                <option disabled>Selecione</option>
                <option>lazer</option>
                <option>trabalho</option>
            </select>
            <button type="submit" className={styles.btn}>Criar Viagem</button>

        </form>
    )
}

export default TripForm