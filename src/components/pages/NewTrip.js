import styles from "./Newtrip.module.css";
import TripForm from "../trip/TripForm";

function NewTrip() {
    return (
        <div className={styles.container_new_trip}>
            <h1>Nova viagem</h1>
            <TripForm />
        </div>
    )
}

export default NewTrip