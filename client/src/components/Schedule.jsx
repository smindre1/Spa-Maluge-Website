import { useState, useEffect, forwardRef } from 'react';
import "../../src/index.css";

const Schedule = forwardRef((props, scheduleId) => {

    const [schedule, setSchedule] = useState();
    const [wait, setWait] = useState(true);

    const [loadTimeSlot, setTimeSlot] = useState([]);
    const [loadEndTime, setEndTime] = useState(null);
    const [roomOne, setRoomOne] = useState(true);
    const [roomTwo, setRoomTwo] = useState(false);
    const [loadRoomNumber, setRoomNumber] = useState();
    
    const timeslotIndex = { 0: '12:00AM', 1: '12:15AM', 2: '12:30AM', 3: '12:45AM', 4: '01:00AM', 5: '01:15AM', 6: '01:30AM', 7: '01:45AM', 8: '02:00AM', 9: '02:15AM', 10: '02:30AM', 11: '02:45AM', 12: '03:00AM', 13: '03:15AM', 14: '03:30AM', 15: '03:45AM', 16: '04:00AM', 17: '04:15AM', 18: '04:30AM', 19: '04:45AM', 20: '05:00AM', 21: '05:15AM', 22: '05:30AM', 23: '05:45AM', 24: '06:00AM', 25: '06:15AM', 26: '06:30AM', 27: '06:45AM', 28: '07:00AM', 29: '07:15AM', 30: '07:30AM', 31: '07:45AM', 32: '08:00AM', 33: '08:15AM', 34: '08:30AM', 35: '08:45AM', 36: '09:00AM', 37: '09:15AM', 38: '09:30AM', 39: '09:45AM', 40: '10:00AM', 41: '10:15AM', 42: '10:30AM', 43: '10:45AM', 44: '11:00AM', 45: '11:15AM', 46: '11:30AM', 47: '11:45AM', 48: '12:00PM', 49: '12:15PM', 50: '12:30PM', 51: '12:45PM', 52: '01:00PM', 53: '01:15PM', 54: '01:30PM', 55: '01:45PM', 56: '02:00PM', 57: '02:15PM', 58: '02:30PM', 59: '02:45PM', 60: '03:00PM', 61: '03:15PM', 62: '03:30PM', 63: '03:45PM', 64: '04:00PM', 65: '04:15PM', 66: '04:30PM', 67: '04:45PM', 68: '05:00PM', 69: '05:15PM', 70: '05:30PM', 71: '05:45PM', 72: '06:00PM', 73: '06:15PM', 74: '06:30PM', 75: '06:45PM', 76: '07:00PM', 77: '07:15PM', 78: '07:30PM', 79: '07:45PM', 80: '08:00PM', 81: '08:15PM', 82: '08:30PM', 83: '08:45PM', 84: '09:00PM', 85: '09:15PM', 86: '09:30PM', 87: '09:45PM', 88: '10:00PM', 89: '10:15PM', 90: '10:30PM', 91: '10:45PM', 92: '11:00PM', 93: '11:15PM', 94: '11:30PM', 95: '11:45PM'
};


    useEffect(() => {
        setTimeSlot([]);
        fetchSchedule();
        //Room Numbers are hard set by itemcategory based on how the database was seeded in the REST API
        if(Number(props.itemcategory) == 1) {
            roomOne ? setRoomNumber(1) : setRoomNumber(2);
        } else if(Number(props.itemcategory) == 2) {
            setRoomNumber(3);
        }
    }, [props.year, props.month, props.day, props.itemcategory])

    useEffect(() => {
        props.setTrigger(true);
        loadTimeSlot.length > 0 ? checkEndTime() : null;

        const checkDuration = () => {
            //time-slots are in increments of 15 minutes
            const timeCount = props.duration/15;
            //If there is a remainder then the service duration is not a multiple of 15 and must be rounded up
            const time = timeCount%1;
            let timeslots = [...loadTimeSlot];

            if(time == 0) {
                let count = Number(loadTimeSlot[0]) + 1;
                for(let i=0; i < timeCount - 1; i++) {
                    timeslots = [...timeslots, `${count}`];
                    count = count + 1;
                }
                // console.log(timeslots, "rounded 1");
                setTimeSlot(timeslots);
            } else {
                let roundedTime = Math.ceil(timeCount);
                let count = Number(loadTimeSlot[0]) + 1;
                for(let i=0; i < roundedTime - 1; i++) {
                    timeslots = [...timeslots, `${count}`];
                    count = count + 1;
                }
                // console.log(timeslots, "rounded 2");
                setTimeSlot(timeslots);

                // console.log(roundedTime, loadTimeSlot, "rounded");
                const remainder = Math.round(time*15);
            }
        }
        // console.log(loadTimeSlot, "loaded timeslots");
        loadTimeSlot.length == 1 ? checkDuration() : null;
        
    }, [loadTimeSlot])

    //If the user changes the duration the values will be reset
    useEffect(() => {
        // !wait ? console.log(schedule?.schedule[0], "Schedule ...") : null;
        setTimeSlot([]);
        setEndTime(null);
    }, [props.duration])

    const fetchSchedule = () => {
        setWait(true);
        setSchedule();
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `schedule/${Number(props.year)}/${props.month}/${Number(props.day)}/${Number(props.itemcategory)}/`;
        //Fetches schedule day data
        fetch(url)
        //Checks if the responding data is ok
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            // console.log(response.json())
            return response.json();
        })
        .then(data => {
            //Adjust to get room numbers from inventory item-list
            
            if(Number(props.itemcategory) == 1) {
                let roomOneSchedule = [];
                let roomTwoSchedule = [];
                data.data.timeSlots.map((timeSlot) => {
                    timeSlot.availability[0].available == true ? roomOneSchedule.push(timeSlot.time) : null;
                    timeSlot.availability[1].available == true ? roomTwoSchedule.push(timeSlot.time) : null;
                });
                setSchedule([roomOneSchedule, roomTwoSchedule]);
            } else if(Number(props.itemcategory) == 2) {
                let roomThreeSchedule = [];
                data.data.timeSlots.map((timeSlot) => {
                    timeSlot.availability[2].available == true ? roomThreeSchedule.push(timeSlot.time) : null;
                });
                setSchedule([roomThreeSchedule]);
            }
            // console.log(data, "schedule");

            setWait(false);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    const checkSchedule = (num) => {
        if(!wait) {
            const time = Math.ceil(props.duration/15);
            // schedule.
            const scheduleOne = schedule[num].length;
            let results = (scheduleOne - time) > 0 ? true : false;
            return results;
        }
    }

    const checkEndTime = () => {
        const timeCount = props.duration/15;
        const time = timeCount%1;
        if(time == 0) {
            setEndTime(timeslotIndex[Number(loadTimeSlot[0]) + timeCount]);
        } else {
        let roundedTime = timeslotIndex[Number(loadTimeSlot[0]) + Math.floor(timeCount)]
        const remainder = Math.round(time*15);
        let pattern = `${roundedTime[3]}${roundedTime[4]}`;
        let minutes = Number(pattern) + remainder;
        minutes < 10 ? minutes = `0${minutes}` : minutes = String(Number(minutes));
        const correctTime = roundedTime.replace(pattern, minutes);
        setEndTime(correctTime);}
    }

    const adjustSchedule = (num) => {
        let startSplit = 0;
        let endSplit = null;
        let split = [];
        let lastInstance = true;
        let present = true;
        let timeSlotList = [...schedule[num]];
        let length = timeSlotList.length;
        //Measures the first and last time value of the array
        let start = timeSlotList[0];
        let end = timeSlotList[length-1] + 1;

        //The iteration is to keep track of the placement within the array
        let iteration = 0;
        for(let i=start; i < end; i++) {
            lastInstance = present;
            present = timeSlotList[iteration] == i ? true : false;
            //Checks if it is the start or end of a grouping of time slots and records it
            if(lastInstance == true && present == false) {
                endSplit = iteration;
                if(endSplit != null) {
                    split.push({startSplit, endSplit});
                    startSplit = endSplit;
                    endSplit = null;
                    present = true;
                    i = timeSlotList[iteration];
                }
            } else if(lastInstance == false && present == true) {
                startSplit = iteration;
            }
            //Checks if it is the end of the array, and if so pushes the last grouping
            if(timeSlotList[iteration] + 1 == end) {
                startSplit != null ? split.push({startSplit, endSplit: iteration + 1}) : null;
                i = end;
            }
            iteration = iteration+1;
        }

        const time = Math.ceil(props.duration/15);
        let newTimeSlotList = [];

        //This 'for' loop checks each grouping of time slots and remove the last few timeslots from each grouping based on the service's duration
        //This is meant to prevent them from booking something like an hour long service in a 15 minute appointment window
        for(let i=0; i<split.length; i++) {
            let timeSlotGrouping = timeSlotList.splice(0, [split[i].endSplit - split[i].startSplit]);
            for(let q=0; q < time-1; q++) {
                timeSlotGrouping.length > 0 ? timeSlotGrouping.pop() : null;
            }
            newTimeSlotList = [...newTimeSlotList, ...timeSlotGrouping];
        }
        //Moves all the time-slot groups into one final array
        let finalTimeSlotList = [];
        newTimeSlotList.forEach((time) => finalTimeSlotList.push(time));

        //Loads the time-slot clickable elements ("buttons") in the schedule
        return(finalTimeSlotList.map((time) => {
            return <p className={loadTimeSlot[0] == time ? "timeslot selectedTime" : "timeslot"} onClick={(e) => {setTimeSlot([e.target.getAttribute("value")])}} value={time} key={time}>{timeslotIndex[time]}</p>
        }))
    }


    return(
        <div ref={scheduleId} value={loadTimeSlot} room={loadRoomNumber} className='schedule'>
            {wait ? <h2 value='invalid'>Loading...</h2> : null}

            <p>Please select an appointment time.</p>
            {loadTimeSlot.length > 0 && loadEndTime ? <p>Selected: {timeslotIndex[Math.min(...loadTimeSlot)]} to {loadEndTime} (EST)</p> : <p>No Time Has Been Selected</p>}
            {roomOne && checkSchedule(0) ? 
                <div ref={scheduleId} value={loadTimeSlot} room={1} className='listedTimeSlots'>
                    {schedule != [] ? adjustSchedule(0) : <h2>Loading...</h2>}
                </div>
            : null}
            {roomTwo  && checkSchedule(1) ? 
                <div ref={scheduleId} value={loadTimeSlot} room={2} className='listedTimeSlots'>
                    {schedule ? adjustSchedule(1) : <h2>Loading...</h2>}
                </div>
            : null}
            {/* <div ref={scheduleId} value={loadTimeSlot} className='listedTimeSlots'>
                {schedule?.schedule ? schedule.schedule.map((timeslot) => {
                    return <p className={loadTimeSlot == timeslot.time ? "timeslot selectedTime" : "timeslot"} onClick={(e) => {setTimeSlot([e.target.getAttribute("value")])}} value={timeslot.time} key={timeslot.time}>{timeslotIndex[timeslot.time]}</p>
                }): <h2>Loading...</h2>}
            </div> */}
            {schedule && schedule.length > 1 ? 
            <div className='flexRow'>
                <p className={roomOne ? "roomTab selectedTab" : "roomTab"} onClick={(e) => {setTimeSlot([]); setRoomTwo(false); setRoomOne(true);}}>Room One</p>
                <p className={roomTwo ? "roomTab selectedTab" : "roomTab"} onClick={(e) => {setTimeSlot([]); setRoomTwo(true); setRoomOne(false);}}>Room Two</p>
            </div> : null}
        </div>
    );
});
  
  export default Schedule;