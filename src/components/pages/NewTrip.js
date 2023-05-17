import styles from "./Newtrip.module.css";
import TripForm from "../trip/TripForm";

function NewTrip() {
    return (
        <div className={styles.container_new_trip}>
            <h1>Nova viagem</h1>
            <TripForm btnText="Criar Viagem"/>
        </div>
    )
}

export default NewTrip