import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Trip = () => {

    const { id } = useParams()
    const [trip, setTrip] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/trips/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })   
            .then((resp) => resp.json())
            .then((data) => {
                setTrip(data)
            })
        .catch((err)=>console.log(err))
    },[id])

    return (
        <p>{trip.name}</p>
    )
}