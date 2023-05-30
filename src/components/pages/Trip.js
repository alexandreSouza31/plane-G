import { parse, v4 as uuidv4 } from "uuid"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";

import Loading from "../layoult/Loading";
import Container from "../layoult/Container";
import TripForm from "../trip/TripForm";
import Message from "../layoult/Message";
import ExpensesForm from "../expenses/ExpensesForm";

import styles from "./Trip.module.css";

export const Trip = () => {

    const { id } = useParams()
    const [trip, setTrip] = useState([])
    const [showTripForm, setShowTripForm] = useState(false)//mostrará ou não os dados do projeto(inicialmente não mostrará!).
    const [showExpenseForm, setShowExpenseForm] = useState(false)//mostrará ou não os dados do projeto(inicialmente não mostrará!).
    const [message, setMessage] = useState()//altero o texto da mensagem
    const [type, setType] = useState()//altero o tipo da mensagem

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/trips/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setTrip(data)
                })
                .catch((err) => console.log(err))


        }, 2000);
    }, [id])

    function editPost(trip) {
        if (trip.budget < trip.cost) {
            setMessage("O orçamento não pode ser menor  que o custo do projeto!")
            setType("error");
            return false;
        }

        fetch(`http://localhost:5000/trips/${trip.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(trip)//mandando o projeto como texto
        })
            .then(resp => resp.json())
            .then((data) => {
                setTrip(data)//altero a viagem com os dados que vieram atualizados
                setShowTripForm(false)//esconder o formulário quando termina a edição.
                setMessage(`A viagem para ${trip.name} foi editada com sucesso!`)
                setType("success");
            })
            .catch(err => console.error(err))

        setMessage()
    }

    function createExpense(trip) {
        //vai pegar a última despesa
        const lastExpense = trip.expenses[trip.expenses.length - 1]
        lastExpense.id = uuidv4()//id único que vai servir pra renderizar as listas no react

        const lastExpenseCost = lastExpense.cost;

        const newCost = parseFloat(trip.cost) + parseFloat(lastExpenseCost);/*esse é o custo 
        que vai ter na viagem toda quando eu adicionar essa despesa*/

        if (newCost > parseFloat(trip.budget)) {//se passou do valor máximo disponível
            setMessage("Orçamento ultrapassado!");
            setType("error");
            trip.expenses.pop();//elimino esse serviço inválido
            return false
        }

    }

    function toggleTripForm() {//função somente para alterar o estado.
        setShowTripForm(!showTripForm);
    }

    function toggleExpenseForm() {
        setShowExpenseForm(!showExpenseForm);
    }
    return (<>
        {trip.name ? (
            <div className={styles.div_details}>
                <Container customClass="column">
                    <div className={styles.container_details}>
                        {message && <Message type={type} msg={message} />}
                        <h1>Viagem: {trip.name} <TfiLocationPin /></h1>
                        <button className={styles.btn} onClick={toggleTripForm}>
                            {!showTripForm ? 'Editar' : 'Fechar'}
                        </button>

                        {!showTripForm ? (//se for editar...
                            <div className={styles.div_info}>
                                <p>
                                    <span>Categoria: </span>{trip.category.name}
                                </p>
                                <p>
                                    <span>Orçamento Total: </span>R$ {trip.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado: </span>R$ {trip.cost}
                                </p>
                            </div>
                        ) : (//se for ver detalhes
                            <div className={styles.div_info}>
                                <TripForm
                                    handleSubmit={editPost}
                                    btnText="Salvar"
                                    tripData={trip}
                                />
                            </div>
                        )}
                    </div>

                    <div className={styles.container_expense}>

                        <h2>Adicione um gasto</h2>
                        <button className={styles.btn} onClick={toggleExpenseForm}>
                            {!showExpenseForm ? 'Adicionar' : 'Fechar'}
                        </button>
                        <div className={styles.div_info}>
                            {showExpenseForm && <ExpensesForm
                                handleSubmit={createExpense}
                                btnText="Adicionar despesa"
                                tripData={trip}
                            />}
                        </div>
                    </div>
                    <h2>Despesas</h2>
                    <Container customClass="start">
                        <p className={styles.p_expenses}>Itens de despesas</p>
                    </Container>
                </Container>

            </div>
        ) : (
            <Loading />
        )}
    </>)
}