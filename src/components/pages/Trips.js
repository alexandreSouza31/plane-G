import { useLocation } from "react-router-dom"
import Message from "../layoult/Message"

function Trips() {

    const location = useLocation()//hook pra resgatar a msg
    let message = "";
    if (location.state) {//se veio o location.state?
        message = location.state.message;//acesso o msg que sei que está lá, e vou atribuir o valor a essa let.
    }

    return (
        <div>
            <h1>Minhas Viagens</h1>
            {message && <Message type="success" msg={message} />}
            {/* aqui sempre será sucesso. 
            obs: o texto da mensagem está sendo passado no arq NewTrip*/}
        </div>
    )
}

export default Trips