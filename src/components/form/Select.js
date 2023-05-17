import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.select_container}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option disabled>Selecione</option>
                <option>lazer</option>
                <option>trabalho</option>
            </select>
        </div>
    )
}

export default Select;