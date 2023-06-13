import styles from "./Newtrip.module.css";
import TripForm from "../trip/TripForm";
import { useNavigate } from "react-router-dom";

function NewTrip() {
    const navigate = useNavigate()

    function createPost(trip) {
        // inicializa o Plane-G! e os serviços
        trip.cost = 0
        trip.expenses = []

        fetch("http://localhost:5000/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),

        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/trips', { state: { message: "Viagem criada com sucesso!" } });
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.container_new_trip}>
            <h1>Nova viagem</h1>
            <TripForm handleSubmit={createPost} btnText="Criar Viagem" />
        </div>
    )
}

export default NewTrip
