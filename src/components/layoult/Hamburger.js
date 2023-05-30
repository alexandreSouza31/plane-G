import "./Navbar.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hamburger.module.css"

function Hamburger() {
    const [active, set_mode] = useState(false)
    const ToggleMod = () => {
        set_mode(!active)
    }
    return (
        <>
            <div className={active ? `${styles.icon} ${styles.icon_active}` : `${styles.icon}`} onClick={ToggleMod}>
                <div className={`${styles.hamburger} ${styles.hamburger_icon}`}></div>
            </div>
            <div className={active ? `${styles.menu} ${styles.menu_open}` : `${styles.menu} ${styles.menu_close}`}>
                <div className={styles.list}>
                    <ul className={styles.list_itens}>

                        <li className={active ? `${styles.item}` : `${styles.item_close}`}>
                            <Link to="/" onClick={ToggleMod}>Home</Link>
                        </li>
                        <li className={active ? `${styles.item}` : `${styles.item_close}`}>
                            <Link to="/trips" onClick={ToggleMod}>Viagens</Link>
                        </li>
                        <li className={active ? `${styles.item}` : `${styles.item_close}`}>
                            <Link to="/newtrip" onClick={ToggleMod}>Nova Viagem</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Hamburger