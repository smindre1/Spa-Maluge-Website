import { useState, useEffect, useRef} from "react";
import Auth from "../../utils/auth.js";
import Calendar from "../components/Calendar";
// import { UPDATE_SCHEDULE_DAY } from "../../utils/mutations";
import TimeSlotIndex from "../assets/TimeSlotIndex.js";

//This settings page conducts four operations for the user to customize there business/reservation schedule.
//Operation One:
// Allows the user to adjust which days of the week they are open or closed for (Ex: Sun, Mon, Tue...).

//Operation Two:
// Allows the user to adjust their average/usual operating business hours.

//Operation Three:
// Allows the user to adjust specific calendar days to open/closed status.

//Operation Four:
// Allows the user to adjust specific schedule days to different custom operating hours.

const Settings = () => {

  //Operation One:
  const [UpdatingWeekdayCalendar, setUpdatingWeekdayCalendar] = useState(false);
  const [weekdays, setWeekdays] = useState({Sun: "", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "", Sat: ""});
  const [weekdaysReady, setWeekdaysReady] = useState(false);
  //Operation Two:
  const [UpdatingBusinessHours, setUpdatingBusinessHours] = useState(false);
  const [businessOpeningTime, setBusinessOpeningTime] = useState();
  const [businessClosingTime, setBusinessClosingTime] = useState();
  //Operation Three:
  const [UpdatingCalendar, setUpdatingCalendar] = useState(false);
  const [OperationChange, setOperationChange] = useState("");
  const [listOfDays, setListOfDays] = useState([]);
  //Operation Four:
  const [UpdatingSpecificHours, setUpdatingSpecificHours] = useState(false);
  const [secondListOfDays, setSecondListOfDays] = useState([]);
  const [openingTime, setOpeningTime] = useState();
  const [closingTime, setClosingTime] = useState();

  //Operation Three:
  const calendarOneId = useRef(null);
  //Operation Four:
  const calendarTwoId = useRef(null);
  // const [updateScheduleDay, { error: ScheduleError, data: ScheduleDay }] = useMutation(UPDATE_SCHEDULE_DAY);


  //Operation One: =======================================================================================
  //The variables for the calendar month are for the test year that acts as a control group
  //It's only purpose is to reliably measure overall pattern changes applied to the calendar
  useEffect(() => {
    let weekdayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `calendar/1000/January`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      for(let i=0; i < 7; i++) {
        let updatedWeek = Object.assign(weekdays, {[weekdayIndex[i]]: `${data[i].open}`})
        setWeekdays(updatedWeek);
      }
    })
    .then(() => {
      setWeekdaysReady(true);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}, [])

  const updateWeekdays = async () => {
    const qualification = userCheck();
    if(!qualification) {
      window.location.replace('/');
      return;
    }
    const data = { Sun: JSON.parse(weekdays.Sun), Mon: JSON.parse(weekdays.Mon), Tue: JSON.parse(weekdays.Tue), Wed: JSON.parse(weekdays.Wed), Thu: JSON.parse(weekdays.Thu), Fri: JSON.parse(weekdays.Fri), Sat: JSON.parse(weekdays.Sat) };
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "calendar/calendar-weekdays";
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convert data to JSON format
    })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('There was a problem with making the reservation:', error);
    });
  }

  const userChangingWeekday = (num, value) => {
    let weekdayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    setWeekdays(weekdays => {
      const updatedWeek = { ...weekdays, [weekdayIndex[num]]: value };
      return updatedWeek;
    });
  }

  //Operation Two: =======================================================================================
  useEffect(() => {
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `schedule/1000/January/1/1`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      const times = data.data.timeSlots.map((timeSlot) => {
      return timeSlot.time});

      const min = Math.min(...times);
      const max = Math.max(...times);
      setBusinessOpeningTime(min);
      setBusinessClosingTime(max == 95? max : max + 1);

    })
    .then(() => {
      // setWeekdaysReady(true);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
  }, [])

  const updateBusinessHours = async () => {
    const qualification = userCheck();
    if(!qualification) {
      window.location.replace('/');
      return;
    }
    //Double checks that the user's input was not accidantally mixed up
    let opening = Number(businessOpeningTime) > Number(businessClosingTime) - 1 ? Number(businessOpeningTime) : Number(businessClosingTime) - 1;
    let closing = Number(businessClosingTime) - 1 < Number(businessOpeningTime) ? Number(businessClosingTime) - 1 : Number(businessOpeningTime) - 1;

    const data = { open: opening , close: closing };
    const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "schedule/update-schedule-hours";
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Convert data to JSON format
    })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('There was a problem with making the reservation:', error);
    });

  }

  //Operation Three: =======================================================================================
  const updateSpecificDays = async () => {
    const qualification = userCheck();
    if(!qualification) {
      window.location.replace('/');
      return;
    }

    if(OperationChange == "Open" || OperationChange == "Closed") {
    let openStatus = OperationChange == "Open" ? true : false;
      for(let i=0; i < listOfDays.length; i++) {
        const data = { year: Number(listOfDays[i].year) , month: listOfDays[i].month, day: Number(listOfDays[i].day), open: openStatus };
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "calendar/specific-calendar-day";
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) // Convert data to JSON format
        })
        .then(response => {
          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON response
        })
        .catch(error => {
          // Handle any errors that occur during the fetch
          console.error('There was a problem with making the reservation:', error);
        });
      }
    }
  }

  const addDayToList = () => {
    if(calendarOneId.current.getAttribute("year") == null || calendarOneId.current.getAttribute("month") == null || calendarOneId.current.getAttribute("day") == null) {
      return;
    } else {
      let year = calendarOneId.current.getAttribute("year");
      let month = calendarOneId.current.getAttribute("month");
      let day = calendarOneId.current.getAttribute("day");
      let list = [...listOfDays];
      list.push({year, month, day})
      setListOfDays(list);
    }
  }

  //Operation Four: =======================================================================================
  const updateSpecificScheduleDays = async () => {
    const qualification = userCheck();
    if(!qualification) {
      window.location.replace('/');
      return;
    }
    if(!UpdatingSpecificHours) {
      return;
    } else {
      //Time is measured as integers from 0 to 95 so we are checking to make sure the user put the opening and closing times in the correct order
      //open and close are set this way in the event that the user accidentally inputs the opposite values
      let open = Number(openingTime) > Number(closingTime) ? Number(openingTime) : Number(closingTime);
      let close = Number(closingTime) < Number(openingTime) ? Number(closingTime) : Number(openingTime);

      for(let i=0; i < secondListOfDays.length; i++) {
        const data = { year: Number(secondListOfDays[i].year) , month: secondListOfDays[i].month, day: Number(secondListOfDays[i].day), openingTime: open, closingTime: close };
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "schedule/update-schedule-day";
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data) // Convert data to JSON format
        })
        .then(response => {
          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON response
        })
        .catch(error => {
          // Handle any errors that occur during the fetch
          console.error('There was a problem with making the reservation:', error);
        });
      }
    }
  }

  //Because React Ref cannot be treated as a parameter, a duplicate function was needed for Operation Four
  const addDayToSecondList = () => {
    if(calendarTwoId.current.getAttribute("year") == null || calendarTwoId.current.getAttribute("month") == null || calendarTwoId.current.getAttribute("day") == null) {
      return;
    } else {
      let year = calendarTwoId.current.getAttribute("year");
      let month = calendarTwoId.current.getAttribute("month");
      let day = calendarTwoId.current.getAttribute("day");
      let list = [...secondListOfDays];
      list.push({year, month, day})
      setSecondListOfDays(list);
    }
  }

  const timeSlotOptions = () => {
    let list = Object.entries(TimeSlotIndex);
    return (list.map((timeSlot) => {
      return (<option value={timeSlot[0]} key={timeSlot[0]}>{timeSlot[1]}</option>)
    }))
  }

  //Authentication: =======================================================================================
  const userCheck = () => {
    let user = Auth.getProfile();
    let position = user.data ? user.data.position : "Invalid";
    if(position == "Admin" || position == "Boss") {
      return true;
    } else {
      window.location.replace('/');
      return false;
    }
  }

  useEffect(() => {
    const qualification = userCheck();
    if(!qualification) {
      window.location.replace('/');
      return;
    }
  }, [])

  return (
    <section>
        <h1 className="managementPgBreak">Settings:</h1>
        {/* Operation One: */}
        <div className="managementPgBreak">
          <h2>Adjust Days Of the Week:</h2>
          {!UpdatingWeekdayCalendar ? <button onClick={() => {setUpdatingWeekdayCalendar(true); setUpdatingBusinessHours(false); setUpdatingSpecificHours(false); setUpdatingCalendar(false);}}>Change Which Weekdays You're Open For</button> : null}
          {UpdatingWeekdayCalendar ? 
          <section>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Sunday:</p>
              <select className="weekdayInput" title="status" name="type" value={weekdays.Sun} onChange={(e) => {userChangingWeekday(0, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Monday:</p>
              <select title="status" name="type" value={weekdays.Mon} onChange={(e) => {userChangingWeekday(1, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Tuesday:</p>
              <select title="status" name="type" value={weekdays.Tue} onChange={(e) => {userChangingWeekday(2, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Wednesday:</p>
              <select title="status" name="type" value={weekdays.Wed} onChange={(e) => {userChangingWeekday(3, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Thursday:</p>
              <select title="status" name="type" value={weekdays.Thu} onChange={(e) => {userChangingWeekday(4, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Friday:</p>
              <select title="status" name="type" value={weekdays.Fri} onChange={(e) => {userChangingWeekday(5, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <div className="flexRow weekdayDiv">
              <p className="weekday">Saturday:</p>
              <select title="status" name="type" value={weekdays.Sat} onChange={(e) => {userChangingWeekday(6, e.target.value)}}>
                <option value="" disabled>-Select-</option>
                <option value="true">Open</option>
                <option value="false">Closed</option>
              </select>
            </div>
            <button onClick={() => {updateWeekdays()}}>Save</button>
          </section>
          : null}
        </div>
        {/* Operation Two: */}
        <div className="managementPgBreak">
          <h2>Adjust Operating Hours:</h2>
          {!UpdatingBusinessHours ? <button onClick={() => {setUpdatingWeekdayCalendar(false); setUpdatingBusinessHours(true); setUpdatingSpecificHours(false); setUpdatingCalendar(false);}}>Change Your Business' General Operating Hours</button> : null}
          {UpdatingBusinessHours ? 
          <section>
            <div className="flexRow">
              <p className="text"> Business/Store Opens At: </p>
              <select className="timeInput" title="openingTime" name="type" value={businessOpeningTime} onChange={(e) => {setBusinessOpeningTime(e.target.value)}}>
                <option value="" disabled>-Select-</option>
                {timeSlotOptions()}
              </select>
            </div>
            <div className="flexRow">
              <p className="text"> Business/Store Closes At: </p>
              <select className="timeInput" title="closingTime" name="type" value={businessClosingTime} onChange={(e) => {setBusinessClosingTime(e.target.value)}}>
                <option value="" disabled>-Select-</option>
                {timeSlotOptions()}
              </select>
            </div>
            <button onClick={() => {updateBusinessHours()}}>Save</button>
          </section>
          : null}
        </div>
        {/* Operation Three: */}
        <div className="managementPgBreak">
          <h2>Open/Close For Specific Days of the Year (Holidays, Birthdays, etc...):</h2>
          {!UpdatingCalendar ? <button onClick={() => {setUpdatingWeekdayCalendar(false); setUpdatingBusinessHours(false); setUpdatingSpecificHours(false); setUpdatingCalendar(true)}}>Update Specific Operating Days</button> : null}
          {UpdatingCalendar ? 
          <div>
            <p>Explore the Calendar and click the select button to add a date to the list:</p>
            <Calendar ref={calendarOneId} year="" month="" day="" timeslots="" schedule="false"/>
            
            <button onClick={addDayToList}>Select</button>
            <p>Selected Dates:</p>
            <ul>
              {listOfDays.length < 1 ? <p>No dates selected</p> :  
              listOfDays.map((date) => { 
                return (
                <li>{date.month} {date.day}, {date.year}</li>)
              })}
            </ul>
            <p>Please click whether you want your store/business to be OPEN or CLOSED for your listed dates:</p>
            <select title="status" name="type" value={OperationChange} onChange={(e) => {setOperationChange(e.target.value)}}>
              <option value="" disabled>-Select-</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
            <button onClick={() => {updateSpecificDays().then(setListOfDays([]))}}>Save</button>
          </div>
            : null}
        </div>
        {/* Operation Four: */}
        <div className="managementPgBreak">
          <h2>Adjust Operating Hours For Specific Days (Example: Half Days):</h2>
          {!UpdatingSpecificHours ? <button onClick={() => {setUpdatingWeekdayCalendar(false); setUpdatingBusinessHours(false); setUpdatingCalendar(false); setUpdatingSpecificHours(true)}}>Update Specific Operating Days</button> : null}
          {UpdatingSpecificHours ? 
          <div>
            <Calendar ref={calendarTwoId} year="" month="" day="" timeslots="" schedule="false"/>
            <button onClick={addDayToSecondList}>Select</button>
            <p>Selected Dates:</p>
            <ul>
              {secondListOfDays.length < 1 ? <p>No dates selected</p> :  
              secondListOfDays.map((date) => { 
                return (
                <li>{date.month} {date.day}, {date.year}</li>)
              })}
            </ul>
            <div className="flexRow">
              <select className="timeInput" title="openingTime" name="type" value={openingTime} onChange={(e) => {setOpeningTime(e.target.value)}}>
                <option value="" disabled>-Select-</option>
                {timeSlotOptions()}
              </select>
              <p className="text"> To </p>
              <select className="timeInput" title="closingTime" name="type" value={closingTime} onChange={(e) => {setClosingTime(e.target.value)}}>
                <option value="" disabled>-Select-</option>
                {timeSlotOptions()}
              </select>   
            </div>
            <button onClick={() => {updateSpecificScheduleDays().then(setSecondListOfDays([]))}}>Save</button>
          </div>
             : null}
        </div>
        
    </section>
  );
  };
    
    export default Settings;