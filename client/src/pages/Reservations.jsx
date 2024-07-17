import { useState, useEffect } from 'react';
import TimeSlotIndex from "../assets/TimeSlotIndex";
import "../../src/index.css";
// import Services from '../assets/Services';

const Reservations = () => {
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [reservationRoster, setReservationRoster] = useState();
    const [wait, setWait] = useState(true);
    const [loadRoster, setRoster] = useState([]);
    const [param, setParam] = useState();
    const monthsOfYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const currentDate = new Date();

    useEffect(() => {
        //Sets initial date variables (month, day and year) using the current date
        const currentMonth = currentDate.getMonth();

        setMonth(monthsOfYear[currentMonth]);
        setDay(currentDate.getDate());
        setYear(currentDate.getFullYear());

    }, [])

    useEffect(() => {
        if(month != '' && day != '' && year != '') {
            // Make a fetch request for the reservation list
            const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "reservations/" + `${year}/${month}/${day}`;
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
                setReservationRoster(data.data);
                setWait(false);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        } 
        
    }, [month, day, year])

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

    // const findDuration = (services, element) => {
    //     console.log(element, "ele")
    //     //Searches a specific inventory for an item, then returns a time duration based on the rate of a matching price
    //     const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `inventory/${services[0].itemCategory}`;
    //     fetch(url)
    //     //Checks if the responding data is ok
    //     .then(response => {
    //         if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //         }
    //         // Parse the JSON response
    //         return response.json();
    //     })
    //     .then(data => {
    //         const name = services[0].type;
    //         const cost = services[0].price;
    //         const serviceData = data.Items.filter((item) => item.Item == name);
    //         const prices = serviceData[0]?.Prices;
    //         const ratio = prices ? prices.filter((rate) => rate?.cost == cost) : null;
    //         console.log('ratio', ratio)
    //         if(ratio) {
    //             setReload(true);
    //             return ratio[0].time;
    //         } else {
    //             return "N/A"
    //         }
    //     })
    //     .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //     });
    // }

    const displayDays = () => {

        let numOfDays = 1;
            //Checks which month (and if it's a leap year) and establishes a number of days allocated to that month
        if(month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month == 'December') {
            numOfDays = 31;
        } else if( month == 'February' ) {
            Number(year) % 4 > 0 ? numOfDays = 28 : numOfDays = 29;
        } else {
            numOfDays = 30;
        }

        let dayList = [];
        for(let i=1; i < numOfDays + 1; i++) {
            dayList.push(i);
        }
        
        return (
            <select className="reservationFormFields" title="days" name="type" value={day} onChange={(e) => {setDay(e.target.value); setWait(true)}}>
                    <option value="" disabled>-Select Year-</option>
                    {dayList.map((day) => {
                        return(<option key={day} value={day}>{day}</option>)
                    })}
            </select>
        )
    }

    return(
        <div className='flexColumn'>
            <section className='flexRow managementPgBreak'>
                {month != '' && day != '' && year != '' ? 
                <select className="reservationFormFields" title="months" name="type" value={month} onChange={(e) => {setMonth(e.target.value); setDay('1'); setWait(true)}}>
                    <option value="" disabled>-Select Month-</option>
                    {monthsOfYear.map((choice) => {
                        return(<option key={choice} value={choice} >{choice}</option>)
                    })}
                </select>
                : null}
                {month != '' && day != '' && year != '' ? displayDays() : null}
                {month != '' && day != '' && year != '' ? 
                <select className="reservationFormFields" title="years" name="type" value={year} onChange={(e) => {setYear(e.target.value); setDay('1'); setWait(true)}}>
                    <option value="" disabled>-Select Year-</option>
                    <option value={currentDate.getFullYear()}>{currentDate.getFullYear()}</option>
                    <option value={currentDate.getFullYear() + 1}>{currentDate.getFullYear() + 1}</option>
                    <option value={currentDate.getFullYear() + 2}>{currentDate.getFullYear() + 2}</option>
                    <option value={currentDate.getFullYear() + 3}>{currentDate.getFullYear() + 3}</option>
                    <option value={currentDate.getFullYear() + 4}>{currentDate.getFullYear() + 4}</option>
                </select>
                : null}
            </section>
            {wait ? <h2>Loading...</h2> : null}
            {loadRoster.length
            ? <p className='quantityLabel'>Viewing {loadRoster.length} {loadRoster.length === 1 ? 'Reservation' : 'Reservations'}</p>
            : <p className='quantityLabel'>There are no Reservations Currently</p>}

            {loadRoster.map((reservation) => {

                return (
                <div className='clientReservationCard listItem blueHover flexRow' key={reservation._id} reservationid={reservation._id} onClick={recordId}>
                    <section className='flexColumn'>
                        <p className='cardText'>{TimeSlotIndex[reservation?.appointmentTime[0]] || "none"} - {TimeSlotIndex[reservation?.appointmentTime[reservation?.appointmentTime.length - 1] + 1]}</p>
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





