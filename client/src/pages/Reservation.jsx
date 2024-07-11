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
    console.log(url, 'url');
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
                <div className='clientReservationCard' reservationid={reservation?._id}>
                    <p className='cardText'>{TimeSlotIndex[reservation?.appointmentTime[0]] || "none"} (Appointment Time)</p>
                    <section>
                        <p className='sectionLabel bold'>Client's Name</p>
                        <p className='reservationData'>{reservation?.name || "No name"}</p>
                    </section>
                    <section>
                        <p className='sectionLabel bold'>Email</p>
                        <p className='reservationData'>{reservation?.email || "none"}</p>
                    </section>
                    <section>
                        <p className='sectionLabel bold'>Phone Number</p>
                        <p className='reservationData'>{reservation?.phone || "none"}</p>
                    </section>
                    <section>
                        <p className='sectionLabel bold'>Service(s):</p>

                        {/* {reservation?.services.map((service) => {
                            return (
                            <div className='serviceItemCard' key={service.type}>
                                <p className='cardText'>{service.type}</p>
                                <p className='cardText'>For: {service.client}</p>
                                <p className='cardText'>${service.price}</p>
                            </div>
                            )
                        })} */}
                        {reservation?.services.map((service) => {
                            return (
                            <div key={service.client} className='serviceItemCard'>
                                <p className='cardText bold'>{service.type}</p>
                                <p className='cardText'>For: {service.client}</p>
                                <p className='cardText'>Price: ${service.price}</p>
                                <p className='cardText italic'>AddOns:</p>
                                {service.addOns.length < 1 ? <p className='cardText'>None</p> : null}
                                {service?.addOns.map((extraItem) => {
                                    return(<div key={extraItem.addition} >
                                        <p className='cardText bold'>Addition: {extraItem.addition}</p>
                                        <p className='cardText'>Price: ${extraItem.price}</p>
                                    </div>)
                                })}
                            </div>
                            )
                        })}
                    </section>

                        
                    {reservation.specialRequests ? 
                        <section>
                            <p className='sectionLabel bold'>Special Requests</p>
                            <p className='reservationData' >{reservation?.specialRequests || "N/A"}</p>
                        </section>
                    : null}
                    <p className='cardText'>Date: {reservation?.day || "none"}</p>
                </div>
            }

        </div>
    );
  };
    
    export default Reservation;