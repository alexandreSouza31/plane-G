import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../layoult/Loading";
import Container from "../layoult/Container";
import TripForm from "../trip/TripForm"
import Message from "../layoult/Message"

import styles from "./Trip.module.css";

export const Trip = () => {

    const { id } = useParams()
    const [trip, setTrip] = useState([])
    const [showTripForm, setShowTripForm] = useState(false)//mostrará ou não os dados do projeto(inicialmente não mostrará!).
    const [message, setMessage] = useState()//altero o texto da mensagem
    const [type, setType] = useState()//altero o tipo da mensagem

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/trips/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setTrip(data)
                })
                .catch((err) => console.log(err))


        }, 2000);
    }, [id])

    function editPost(trip) {
        if (trip.budget < trip.cost) {
            setMessage("O orçamento não pode ser menor  que o custo do projeto!")
            setType("error");
            return false;
        }

        fetch(`http://localhost:5000/trips/${trip.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(trip)//mandando o projeto como texto
        })
            .then(resp => resp.json())
            .then((data) => {
                setTrip(data)//altero a viagem com os dados que vieram atualizados
                setShowTripForm(false)//esconder o formulário quando termina a edição.
                setMessage(`A viagem para ${trip.name} foi editada com sucesso!`)
                setType("success");
            })
            .catch(err => console.error(err))
        
        setMessage()
    }

    function toggleTripForm() {//função somente para alterar o estado.
        setShowTripForm(!showTripForm)
    }

    return (<>
        {trip.name ? (
            <div className={styles.div_details}>
                <Container customClass="column">
                    <div className={styles.container_details}>
                        {message && <Message type={type} msg={message} />}
                        <h1>Viagem: {trip.name}</h1>
                        <button className={styles.btn} onClick={toggleTripForm}>
                            {!showTripForm ? 'Editar' : 'Fechar'}
                        </button>

                        {!showTripForm ? (//se for editar...
                            <div className={styles.div_info}>
                                <p>
                                    <span>Categoria: </span>{trip.category.name}
                                </p>
                                <p>
                                    <span>Orçamento Total: </span>R$ {trip.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado: </span>R$ {trip.cost}
                                </p>
                            </div>
                        ) : (//se for ver detalhes
                            <div className={styles.div_info}>
                                <TripForm
                                    handleSubmit={editPost}
                                    btnText="Salvar"
                                    tripData={trip}
                                />
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