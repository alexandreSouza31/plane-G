import styles from "./Home.module.css";
import img_freedom from "../../img/freedom.jpg";
import img_accident from "../../img/accident.jpg";
import LinkButton from "../layoult/LinkButton";

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Plane-G!</span>
            </h1>
            <span className={styles.span_despair}>
                <p>Esteja preparado para imprevistos!</p>
                <img src={img_accident} />
            </span>
            <hr></hr>
            <span className={styles.span_freedom}>
                <p>Comece planejar suas viagens agora!</p>
                <LinkButton to="/newtrip" text="Criar Viagem" />
                <img src={img_freedom} />
            </span>
        </section>
    )
}

export default Home