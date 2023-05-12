import {FaLinkedinIn, FaFacebook,FaInstagram,FaGithub} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul  className={styles.social_list}>
                <li><FaLinkedinIn/></li>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaGithub/></li>
            </ul>
            <p>
                <span>Plane-G! </span>
                &copy; 2023
            </p>
        </footer>
    )
}

export default Footer