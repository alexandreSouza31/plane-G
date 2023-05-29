import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../layoult/Loading";

export const Trip = () => {

    const { id } = useParams()
    const [trip, setTrip] = useState([])

    useEffect(() => {
        setTimeout(() => {
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
                .catch((err) => console.log(err))
        }, 3000);
    }, [id])

    return (<>
        {trip.name ? (
            <p>{trip.name}</p>
        ) : (
            <Loading />
        )}
    </>)
}