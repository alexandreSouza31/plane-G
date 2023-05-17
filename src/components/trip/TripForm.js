import styles from "./TripForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { useEffect, useState } from "react";

function TripForm({ btnText }) {//btnText vem lá do componente pai, o newTrip
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        //vou precisar fazer um request:
    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((resp) => resp.json())//retorna o json
        .then((data) => {
            setCategories(data)//reaproveita o dado do json e coloca no hook categories
        })
        .catch((err) => console.log(err))//retorna o erro
    },[])//valor inicial: options vazias

    return (
        <form className={styles.form_new_trip}>
            <Input
                type="text"
                text="Digite o nome da viagem:"
                name="name"
                placeholder="ex: Rio 2024"
                id="nome"
            />
            <Input
                type="number"
                text="Digite o orçamento disponível:"
                name="budget"
                placeholder="ex: 5000"
                id="value"
            />
            <Select name="category_id"
                text="Selecione a categoria:"
                options={categories}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default TripForm;