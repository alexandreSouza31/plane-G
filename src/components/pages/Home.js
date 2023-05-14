import styles from "./Home.module.css";
import img_home from "../../img/freedom.jpg"

function Home() {
    return (
        <section className={styles.home_container}>
            <div className={styles.dialog}>
            <h1>
                Bem-vindo ao <span>Plane-G!</span>
            </h1>
            <p>Esteja preparado(a) para imprevistos.</p>
            <p>Comece planejar suas viagens agora!</p>
            <a href="/">Nova viagem</a>
            <img src={img_home } /></div> 
        </section>
    )
}

export default Home