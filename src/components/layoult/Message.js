import styles from "./Message.module.css";

function Message({type,msg}) {
    return (
        <div className={`${styles.message} ${styles[type]}`}>

        </div>
    )
}

export default Message