import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css"
import Logo from "../../img/logo.png";
import Hamburger from "./Hamburger";

function Navbar() {
    
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.container_navbar}>
                <Hamburger/>
                    <h1>Vai viajar?</h1>
                    <Link to="/">
                        <img className={styles.logo} src={Logo} alt="logo" />
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar