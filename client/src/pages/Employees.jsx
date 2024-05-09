import { useState, useEffect } from 'react';
import Auth from "../../utils/auth";
import "../../src/index.css";

const Employees = () => {
    const [employeeRoster, setEmployeeRoster] = useState();
    const [wait, setWait] = useState(true);
    const [currentStaffPosition, setCurrentStaffPosition] = useState({});

    useEffect(() => {
        const url = import.meta.env.VITE_SPA_MALUGE_DB_API + "users";
        //Fetches calendar data
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
            setEmployeeRoster(data);
            setWait(false);
            // console.log(data, "employee data");
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }, [])

    const userCheck = () => {
        let user = Auth.getProfile();
        let position = user.data ? user.data.position : "Invalid";
        return position;
    }

    const positionColor = (position) => {
        if(position === "Admin") {
            return 'admin employeeData'
        } else if(position === "Boss") {
            return 'boss employeeData'
        } else if(position === "Manager") {
            return 'manager employeeData'
        } else if(position === 'Employee') {
            return 'employee employeeData'
        } else {
            return 'employeeData'
        }
    }

    const loadPositions = (currentPosition) => {
        let user = Auth.getProfile();
        let position = user.data ? user.data.position : "Invalid";

        if(position === "Admin" || position === "Boss") {
            let availablePositions = ["Boss", "Manager", "Employee", "Invalid"];
            availablePositions = availablePositions.filter((role) => role != currentPosition);
            return(availablePositions.map((role) => {
                return(<option key={user._id} className={positionColor(role)}>{role}</option>)}))
        } else if(position === "Manager") {
            let availablePositions = ["Employee", "Invalid"];
            availablePositions = availablePositions.filter((role) => role != currentPosition);
            return(availablePositions.map((role) => {
                return(<option key={user._id} className={positionColor(role)}>{role}</option>)}))
        } else {
            return(employeeRoster.map((user) => {
                    return (<p key={user._id} className={positionColor(user?.position)}>{user?.position || "No Available Name"}</p>);
                    }))
        }
    }

    const loadPositionContainer = () => {
        //Checks the position of the person logged in to know what they are allowed to do
        let user = Auth.getProfile();
        let position = user.data ? user.data.position : "Invalid";

        if(position === "Admin" || position === "Boss" || position === "Manager") {
            //Maps through every staff member, as long as they are not of a higher position, allows the user to change their position with the html <select> element
            return(employeeRoster.map((staff) => {
                if(position === "Admin" && staff.position != "Admin") {
                    return (
                    <select className="employeeDataInput" key={staff._id} title="change position" name="type" value={currentStaffPosition[staff._id]} onChange={(e) => {setCurrentStaffPosition(currentStaffPosition => {
                        const newPosition = { ...currentStaffPosition, [staff._id]: e.target.value }; return newPosition;})}}>
                        {/* The preloaded <option> element is the staff members current position */}
                        <option key={staff._id} className={positionColor(staff?.position)}>{staff?.position || "Invalid"}</option>
                        {/* The loadPositions() function will render in the remaining <option> elements allowed by the user's current position */}
                        {loadPositions(staff?.position)}
                    </select>)
                } else if(position === "Boss" && staff.position != "Admin") {
                    return(<select key={staff._id} title="change position" name="type" value={currentStaffPosition[staff._id]} onChange={(e) => {setCurrentStaffPosition(currentStaffPosition => {
                        const newPosition = { ...currentStaffPosition, [staff._id]: e.target.value }; return newPosition;})}}>
                        <option key={staff._id} className={positionColor(staff?.position)}>{staff?.position || "Invalid"}</option>
                        {loadPositions(staff?.position)}
                    </select>)
                } else if(position === "Manager" && staff.position != "Admin" && staff.position != "Boss" && staff.position != "Manager") {
                    return (<select key={staff._id} title="change position" name="type" value={currentStaffPosition[staff._id]} onChange={(e) => {setCurrentStaffPosition(currentStaffPosition => {
                        const newPosition = { ...currentStaffPosition, [staff._id]: e.target.value }; return newPosition;})}}>
                        <option key={staff._id} className={positionColor(staff?.position)}>{staff?.position || "Invalid"}</option>
                        {loadPositions(staff?.position)}
                    </select>)
                } else {
                    // It will not allow the option to edit staff of the same position as the user
                    return (<p key={staff._id} className={positionColor(staff?.position)}>{staff?.position || "Invalid"}</p>)
                }
            }))
        } else {
            return(employeeRoster.map((user) => {
                // If the user has the position of 'Employee' or 'Invalid' then they are not allowed to edit other staff's positions
                return (<p key={user._id} className={positionColor(user?.position)}>{user?.position || "Invalid"}</p>);
                }))
        }
    }

    const saveChanges = async () => {
        let userIds = Object.keys(currentStaffPosition);
        for(let i=0; i < userIds.length; i++) {
            const url = import.meta.env.VITE_SPA_MALUGE_DB_API + `users/${userIds[i]}`;
            fetch(url, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ position: currentStaffPosition[userIds[i]] }) // Convert data to JSON format
            })
            .then(response => {
              // Check if the response is successful
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); // Parse the JSON response
            })
            .then(data => {
              // Work with the JSON response data
              console.log(data.message);
            })
            .catch(error => {
              // Handle any errors that occur during the fetch
              console.error('There was a problem with the fetch operation:', error);
            });
        }
    }

    return(
        <div className='center flexColumn'>
            <h1 className='alignText'>Employee Roster:</h1> 
            {wait ? <h2>Loading...</h2> : null}
            {employeeRoster
            ? <h2 className='alignText'>Viewing {employeeRoster.length} {employeeRoster.length === 1 ? 'Employee' : 'Employees'}</h2>
            : <h2 className='alignText'>There are no Employees!</h2>}
            <section className='flexRow employeeRoster'>
                <div>
                    <p className='columnLabel'>Name:</p>
                    {employeeRoster ? employeeRoster.map((user) => {
                    return (<p key={user._id} className='employeeData'>{user?.fullName || "No Available Name"}</p>);
                    }) : null}
                </div>
                <div>
                    <p className='columnLabel'>Email:</p>
                    {employeeRoster ? employeeRoster.map((user) => {
                    return (<p key={user._id} className='employeeData'>{user?.email || "No Available Email"}</p>);
                    }) : null}
                </div>
                <div>
                    <p className='columnLabel'>Phone Number:</p>
                    {employeeRoster ? employeeRoster.map((user) => {
                    return (<p key={user._id} className='employeeData'>{user?.phone || "No Available Number"}</p>);
                    }) : null}
                </div>
                <div className='flexColumn'>
                    <p className='columnLabel'>Position:</p>
                    {employeeRoster && employeeRoster.length > 0 ? loadPositionContainer() : null}
                </div>
                
            </section>
            {userCheck() == "Admin" || userCheck() == "Boss" || userCheck() == "Manager" ? <button className="formBtn" type="submit" onClick={saveChanges}>Save Changes</button> : null}
        </div>
    );
};
  
  export default Employees;





