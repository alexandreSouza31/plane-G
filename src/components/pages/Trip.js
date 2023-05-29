import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../layoult/Loading";
import Container from "../layoult/Container"

import styles from "./Trip.module.css"

export const Trip = () => {

    const { id } = useParams()
    const [trip, setTrip] = useState([])
    const [showTripForm, setShowTripForm] = useState(false)//mostrará ou não os dados do projeto(inicialmente não mostrará!).

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/trips/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setTrip(data)
                })
                .catch((err) => console.log(err))
        }, 3000);
    }, [id])


    function toggleTripForm() {//função somente para alterar o estado.
        setShowTripForm(!showTripForm)
    }

    return (<>
        {trip.name ? (
            <div className={styles.div_details}>
                <Container customClass="column">
                    <div className={styles.container_details}>
                        <h1>Viagem: {trip.name}</h1>
                        <button className={styles.btn} onClick={toggleTripForm}>
                            {!showTripForm ? 'Editar' : 'Fechar'}
                        </button>

                        {!showTripForm ? (//se for editar...
                            <div className={styles.div_info}>
                                <p>
                                    <span>Categoria: </span>{trip.category.name }
                                </p>
                                <p>
                                    <span>Orçamento Total: </span>R$ {trip.budget }
                                </p>
                                <p>
                                    <span>Total Utilizado: </span>R$ {trip.cost }
                                </p>
                            </div>
                        ) : (//se for ver detalhes
                            <div className={styles.div_info}>
                                <p>Detalhes da viagem</p>
                            </div>
                        )}
                    </div>
                </Container>

            </div>
        ) : (
            <Loading />
        )}
    </>)
}