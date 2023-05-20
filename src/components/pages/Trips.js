import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

import Message from "../layoult/Message"
import Container from "../layoult/Container";
import LinkButton from "../layoult/LinkButton";
import TripCard from "../trip/TripCard";

import styles from "./Trips.module.css";

function Trips() {
    const [trips, setTrips] = useState([]) //criar um state pra salvar os projetos

    const location = useLocation()//hook pra resgatar a msg
    let message = "";
    if (location.state) {// veio o location.state?
        message = location.state.message;//acesso o msg que sei que está lá, e vou atribuir o valor a essa let.
    }

    useEffect(() => {
        fetch("http://localhost:5000/trips", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(resp => resp.json())
            .then(data => {
                setTrips(data)//setar as viagens por meio da API
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className={styles.trip_container}>
            <div className={styles.title_container}>
                <h1>Minhas Viagens</h1>
                <LinkButton to="/newtrip" text="Nova Viagem" />
            </div>
            {message && <Message type="success" msg={message} />}
            {/* aqui sempre será sucesso. 
            obs: o texto da mensagem está sendo passado no arq NewTrip*/}

            <Container customClass="start">
                {trips.length > 0 &&
                    trips.map((trip) => (<TripCard
                        id={trip.id}
                        name={trip.name}
                        budget={trip.budget}
                        category={trip.category.name}
                        key={trip.id}
                    />
                    ))}
            </Container>
        </div>
    )
}

export default Trips