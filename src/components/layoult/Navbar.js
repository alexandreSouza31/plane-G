import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css"
import logo from "../../img/logo.png";
//import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
    
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.container_navbar}>
                <Hamburger/>
                    <h1>Vai viajar?</h1>
                    <Link to="/">
                        <img className={styles.logo} src={logo} />
                    </Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar