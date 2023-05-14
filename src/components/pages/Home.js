import styles from "./Home.module.css";
import img_home from "../../img/img_home.jpg"

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Plane-G!</span>
            </h1>
            <p>Esteja preparado(a) para imprevistos. Comece planejar suas viagens!</p>
            <a href="/">Nova viagem</a>
        </section>
    )
}

export default Home