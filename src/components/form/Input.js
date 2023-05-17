import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        //valores dinâmicos
        <div className={styles.input_container}>
            <label htmlFor={name}>{text}</label>
            <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}>
            </input>            
        </div>
    )
}

export default Input