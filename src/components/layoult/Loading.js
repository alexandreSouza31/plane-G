import styles from "./Loading.module.css";
import loading_img from "../../img/puff.svg"


const Loading = () => {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading_img} alt="Loading" />
        </div>
    )
}

export default Loading