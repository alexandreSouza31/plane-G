import styles from "../layoult/Container.module.css";

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    //quer dizer que os elementos filhos ficarão encapsulados dentro de Container.
    //classes dinâmicas. Coloco a classe que vêm da props.(customClass). É opcional, quando for necessário.
}

export default Container