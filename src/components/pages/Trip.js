import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../layoult/Loading";
import Container from "../layoult/Container"
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
            <div>
                <Container customClass="column">
                    <div>

                        <h1>Viagem: {trip.name}</h1>
                        <button onClick={toggleTripForm}>
                            {!showTripForm ? 'Editar' : 'Fechar'}
                        </button>

                        {!showTripForm ? (//se for editar...
                            <div>
                                <p>
                                    <span>Categoria: </span>{trip.category.name }
                                </p>
                                <p>
                                    <span>Orçamento Total: </span>{trip.budget }
                                </p>
                                <p>
                                    <span>Total Utilizado: </span>{trip.cost }
                                </p>
                            </div>
                        ) : (//se for ver detalhes
                            <div>
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