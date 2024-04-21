import {useQuery} from '@apollo/client'
import { GET_CALENDAR } from '../../utils/queries';
import { useState, useEffect, useRef, forwardRef } from 'react';
import "../../src/index.css";
import Schedule from './Schedule';

const Calendar = forwardRef((props, ref) => {
    const calendarId = ref;
    const today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const weekdayLabels = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

    const [loadYear, setYear] = useState(today.getFullYear());
    const [loadMonth, setMonth] = useState(months[today.getMonth()]);
    const [loadDays, setDays] = useState();
    const [loadDay, setDay] = useState(today.getDate());
    // const [loadItemCategory, setItemCategory] = useState(props.itemCategory);
    const [loadOpenStatus, setOpenStatus] = useState();
    const [updated, setUpdated] = useState(false);
    const [loadTimeSlots, setTimeSlots] = useState();

    const { loading: wait, error, data: calendar} = useQuery(GET_CALENDAR);

    const scheduleId = useRef(null);

    useEffect(() => {
        if(calendar) {
            displayDays(loadYear, loadMonth);
        }
    }, [wait, loadYear, loadMonth])

    useEffect(() => {
        if(updated == true) {
            setTimeSlots(scheduleId.current.getAttribute("timeslots"));
            setUpdated(false);
        }
    }, [updated])

    useEffect(() => {
    }, [loadYear])

    const displayDays = (year, month) => {
        const specificYear = calendar.calendar.find((calYears) => calYears.year == year);
        setDays(specificYear[month]);
        
    };

    const checkIfClosed = (days) => {
        if(days.day == loadDay) { return 'selectedDay calendarDay'} 
        else if (days.open == false || months.indexOf(loadMonth) < today.getMonth() && loadYear == today.getFullYear() || months.indexOf(loadMonth) == today.getMonth() && loadYear == today.getFullYear() && days.day < today.getDate()) { return 'closedCalendarDay calendarDay'}
        else { return 'calendarDay'}
    }

    const loadSchedule = () => {
        const targetYear = calendar.calendar.filter((year) => year.year == loadYear);
        const target = targetYear[0][loadMonth][loadDay - 1].open;
        // setOpenStatus(target[0][loadMonth][loadDay - 1].open);
        if(props.schedule === "true") {

            //open && targetYear > todayYear  ||  open && targetYear == todayYear && targetMonth > todayMonth || open && targetYear == todayYear && targetMonth == todayMonth && targetDay > todaysDay
            if(target === true && loadYear > today.getFullYear() || target === true && loadYear == today.getFullYear() && months.indexOf(loadMonth) > today.getMonth() || target === true && loadYear == today.getFullYear() && months.indexOf(loadMonth) == today.getMonth() && loadDay > today.getDate()) {
                return(<Schedule ref={scheduleId} year={loadYear} month={loadMonth} day={loadDay} duration={props.duration} itemCategory={props.itemCategory} setTrigger={setUpdated}/>)
            } else {
                return(<p className='schedule'>No available timeslots for this date.<br></br>(Please select another day)</p>)
            }
        } else {
            return null;
        }
        
    }

    return(
        <div ref={calendarId} year={loadYear} month={loadMonth} day={loadDay} timeslots={loadTimeSlots} className="dateTool">
            <div className='calendar'>
                {wait ? <h2>Loading...</h2> : null}
                <select title="year" name="type" value={loadYear} onChange={(e) => {setDay(1); setYear(e.target.value)}}>
                    <option value="" disabled>-Select-</option>
                    {calendar?.calendar ? calendar.calendar.map((year) => {
                        //This is to exclude any Test Calendar Years (The Test Calendar Year is used in the Settings page)
                        return today.getFullYear() <= year.year && year.year < 3000 ? <option value={year.year} key={year.year}>{year.year}</option> : null;
                    }) : null}
                </select>
                <select title="month" name="type" value={loadMonth} onChange={(e) => {setDay(1); setMonth(e.target.value);}}>
                    <option value="" disabled>-Select-</option>
                    {calendar?.calendar ? months.map((month) => {
                        return <option value={month} key={month}>{month}</option>
                    }) : null}
                </select>
                {/* Loads the weekday labels Su, M, Tu, W... */}
                {loadDays ? 
                <div className='flexRow'>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[0].weekday]}</p>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[1].weekday]}</p>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[2].weekday]}</p>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[3].weekday]}</p>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[4].weekday]}</p>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[5].weekday]}</p>
                    <p className='calendarDayLabel'>{weekdayLabels[loadDays[6].weekday]}</p>
                </div> : null}
                {/* Loads the days of the highlighted month */}
                <div className='calendarDays'>
                    {loadDays ?
                        loadDays.map((days) => {
                        return <a className={checkIfClosed(days)} value={days.day} key={days.day} onClick={(e) => {setDay(e.target.getAttribute("value")); setOpenStatus(days.open)}}>{days.day}</a>
                    }) : null}
                </div>
            </div>
            {/* { props.schedule === "true" && loadOpenStatus === true ? <Schedule ref={scheduleId} year={loadYear} month={loadMonth} day={loadDay} setTrigger={setUpdated}/> : <p className='schedule'>No available timeslots for this date.<br></br>(Please select another day)</p>} */}
            {calendar ? loadSchedule() : null}
        </div>
    );
});
  
  export default Calendar;