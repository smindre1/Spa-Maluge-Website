import { useParams } from "react-router-dom";
// import {useQuery} from '@apollo/client'
// import { GET_RESERVATION } from '../../utils/queries';
import { useState, useEffect } from 'react';
import TimeSlotIndex from "../assets/TimeSlotIndex";
import "../../src/index.css";

const Reservation = () => {

  const { reservationId } = useParams();
  const [reservation, setReservation] = useState();
  const [wait, setWait] = useState(true);
  // const { loading: wait, data: reservation} = useQuery(GET_RESERVATION, {
  //   variables: { reservationId: reservationId }
  // });

  useEffect(() => {
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `reservations/${reservationId}`;
    fetch(url)
    //Checks if the responding data is ok
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        setReservation(data);
        setWait(false);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }, [])

    return (
      <div className='center'>
            {wait ? <h2>Loading...</h2> : 
                <div className='clientReservationCard' reservationid={reservation.reservation?._id}>
                    <p className='cardText'>{TimeSlotIndex[reservation.reservation?.appointmentTime] || "none"} (Appointment Time)</p>
                    <p className='cardText bold'>Client's Name: {reservation.reservation?.name || "No name"}</p>
                    <p className='cardText bold'>Email: {reservation.reservation?.email || "none"}</p>
                    <p className='cardText'>Phone Number: {reservation.reservation?.phone || "none"}</p>
                    <p className='cardText'>Service(s):</p>

                    {reservation.reservation?.services.map((service) => {
                        return (
                        <div className='serviceItemCard' key={service.type}>
                            <p className='cardText'>{service.type}</p>
                            <p className='cardText'>For: {service.client}</p>
                            <p className='cardText'>${service.price}</p>
                        </div>
                        )
                    })}
                        
                    {reservation.reservation.specialRequests ? <p className='cardText'>Special Requests: <br></br>{reservation.reservation?.specialRequests}</p> : null}
                    <p className='cardText'>Date: {reservation.reservation?.day || "none"}</p>
                </div>
            }

        </div>
    );
  };
    
    export default Reservation;