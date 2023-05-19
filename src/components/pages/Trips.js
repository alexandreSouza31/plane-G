import { useLocation } from "react-router-dom"
import Message from "../layoult/Message"

import Container from "../layoult/Container";
import LinkButton from "../layoult/LinkButton";

import styles from "./Trips.module.css";

function Trips() {

    const location = useLocation()//hook pra resgatar a msg
    let message = "";
    if (location.state) {//se veio o location.state?
        message = location.state.message;//acesso o msg que sei que está lá, e vou atribuir o valor a essa let.
    }

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
            <p>Viagens...</p>
            </Container>
        </div>
    )
}

export default Trips