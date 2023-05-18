import styles from "./TripForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import { useEffect, useState } from "react";

function TripForm({ handleSubmit,btnText, tripData }) {//btnText vem lá do componente pai, o newTrip
    const [categories, setCategories] = useState([])
    const [trip, setTrip]=useState(tripData || {})
    
    useEffect(() => {
        //vou precisar fazer um request:
    fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((resp) => resp.json())//retorna o json
        .then((data) => {
            setCategories(data)//reaproveita o dado do json e coloca no hook categories
        })
        .catch((err) => console.log(err))//retorna o erro
    },[])//valor inicial: options vazias

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(trip)
    }

    function handleChange(e) {//muda o nome da viagem conforme digito no input
        setTrip({ ...trip, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {//muda o nome da viagem conforme digito no input
        setTrip({
            ...trip, category: {
                id: e.target.value,
                name:e.target.options[e.target.selectedIndex].text//com isso consigo acessar qual opção selecionada pelo index a partir do option.
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form_new_trip}>
            <Input
                type="text"
                text="Digite o nome da viagem:"
                name="name"
                placeholder="ex: Rio 2024"
                handleOnChange={handleChange}
                value={trip.name ? trip.name:""}
            />
            <Input
                type="number"
                text="Digite o orçamento disponível:"
                name="budget"
                placeholder="ex: 5000"
                handleOnChange={handleChange}
                value={trip.budget ? trip.budget :""}
            />
            <Select
                name="category_id"
                text="Selecione a categoria:"
                options={categories}
                handleOnChange={handleCategory}
                value={trip.category ? trip.category.id:""}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default TripForm;