import { useState, useEffect } from 'react';
import TimeSlotIndex from "../assets/TimeSlotIndex";
import "../../src/index.css";
// import Services from '../assets/Services';

const Reservations = () => {

    const [reservationRoster, setReservationRoster] = useState();
    const [wait, setWait] = useState(true);
    const [loadRoster, setRoster] = useState([]);
    const [param, setParam] = useState();

    useEffect(() => {
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "reservations";
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
            setReservationRoster(data);
            setWait(false);
            // console.log(data, "employee data");
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, [])

    useEffect(() => {
        !wait ? reservationSchedule() : null;
    }, [wait])

    // useEffect(() => {
    //     loadRoster ? console.log(loadRoster, "roster") : null;
    // }, [loadRoster])

    useEffect(() => {
        //Redirect to the clicked reservation's page
        param == null ? null : window.location.replace(`/reservations/${param}`);
    }, [param])

    const reservationSchedule = () => {   
        const reservations = reservationRoster || [];
        var sortedList;
        if(reservationRoster) {
            sortedList = [...reservations];
            sortedList = sortedList.sort((a, b) => {
                return (Number(a.day) - Number(b.day));
            });
            // console.log(sortedList, "Sorted List");
            
            setRoster(sortedList);
        } else {
        setRoster(reservations);}
    };

    const recordId = (e) => {
        //Grabs the <div>'s reservationid and records it to React State Variable
        setParam(e.target.parentElement.getAttribute("reservationid") || e.target.getAttribute("reservationid"));
    }

    const findDuration = (services) => {
        //Searches a specific inventory for an item, then returns a time duration based on the rate of a matching price
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `inventory/${services[0].itemCategory}`;
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
            const name = services[0].type;
            const cost = services[0].price;
            const serviceData = data.Items.filter((item) => item.Item == name);
            const prices = serviceData[0]?.Prices;
            const ratio = prices ? prices.filter((rate) => rate?.cost == cost) : null;
            if(ratio) {
                return ratio[0].time;
            } else {
                return "N/A"
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    return(
        <div className='center flexColumn'>
            {wait ? <h2>Loading...</h2> : null}
            {loadRoster.length
            ? <p className='alignText'>Viewing {loadRoster.length} {loadRoster.length === 1 ? 'Reservation' : 'Reservations'}:</p>
            : <p className='alignText'>There are no Reservations Currently</p>}

            {loadRoster.map((reservation) => {

                return (
                <div className='clientReservationCard' key={reservation._id} reservationid={reservation._id} onClick={recordId}>
                    <p className='cardText'>{TimeSlotIndex[reservation?.appointmentTime[0]] || "none"} (Appointment Time: {findDuration(reservation?.services)} Minutes)</p>
                    <div className='flexRow'>
                    <section className='flexColumn'>
                        <div className='flexRow'>
                            <section>
                                <p className='sectionLabel bold'>Client's Name</p>
                                <p className='reservationData'>{reservation?.name || "No name"}</p>
                            </section>
                            <section>
                                <p className='sectionLabel bold'>Email:</p>
                                <p className='reservationData bold'>{reservation?.email || "none"}</p>
                            </section>
                            <section>
                                <p className='sectionLabel'>Phone Number:</p>
                                <p className='reservationData'>{reservation?.phone || "none"}</p>
                            </section>
                        </div>
                        {reservation.specialRequests ? <section><p className='sectionLabel cardText'>Special Requests:</p><p className='reservationData'>{reservation.specialRequests}</p></section> : <section><p className='sectionLabel cardText'>Special Requests:</p><p className='reservationData'>N/A</p></section>}
                    </section>
                        <section>
                            <p className='sectionLabel cardText'>Service(s):</p>
                            {reservation.services.map((service) => {
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
                    </div>
                    
                        
                    
                    <p className='cardText'>Date: {reservation?.day || "none"}</p>
                </div>
                );
            })}

        </div>
    );
};
  
  export default Reservations;





