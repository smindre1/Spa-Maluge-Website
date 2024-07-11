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
        param == null ? null : window.location.replace(`/management/reservations/${param}`);
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
        //Searches for the html element of the clicked target that has the reservationid attribute
        let targetElement = e.target.closest('[reservationid]');
        //Grabs the <div>'s reservationid and records it to React State Variable
        setParam(targetElement.getAttribute("reservationid"));
    }

    const findDuration = (services, element) => {
        console.log(element, "ele")
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
            console.log('ratio', ratio)
            if(ratio) {
                setReload(true);
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
            ? <p className='quantityLabel alignText'>Viewing {loadRoster.length} {loadRoster.length === 1 ? 'Reservation' : 'Reservations'}</p>
            : <p className='quantityLabel alignText'>There are no Reservations Currently</p>}

            {loadRoster.map((reservation) => {

                return (
                <div className='clientReservationCard listItem blueHover flexRow' key={reservation._id} reservationid={reservation._id} onClick={recordId}>
                    <section className='flexColumn'>
                        <p className='cardText'>{TimeSlotIndex[reservation?.appointmentTime[0]] || "none"} - {TimeSlotIndex[reservation?.appointmentTime[reservation?.appointmentTime.length - 1] + 1]} (Apt Time: {findDuration(reservation?.services)} Min)</p>
                        {/* <p className='cardText'>{TimeSlotIndex[reservation?.appointmentTime[0]] || "none"} (Apt Time: {findDuration(reservation?.services)} Min)</p> */}
                        <p className='cardText'>Date: {reservation?.day || "none"}</p>
                    </section>
                    
                    <section className='flexColumn clientTag'>
                        {/* <p className='italic'>Client's Name:</p> */}
                        <p className='bold' >{reservation?.name || "No name"}</p>
                        
                    </section> 
                </div>
                );
            })}

        </div>
    );
};
  
  export default Reservations;





