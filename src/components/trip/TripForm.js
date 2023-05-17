import styles from "./TripForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function TripForm({btnText}) {//btnText vem lá do componente pai, o newTrip

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
            <Select name="category_id" text="Selecione a categoria:" />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default TripForm;