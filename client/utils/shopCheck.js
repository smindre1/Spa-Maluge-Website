//The class's function will be written at a later time when they are implemented.
class shopCheck {
    // This function is here to check the local storage information against the service prices stored in the server's database.
    // This is done to prevent tampering and errors.
    cartCheck(data) {
        return data
    }
    //Checks to make sure that there is no overlap, same room and appointment time, between at least two selected services.
    checkOverlap(data) {
        return data
    }
    //When adding a service to reciept, this function will check the other selected services to see if the room and time are already selected elsewhere.
    //This function comes into play if the customer is trying to add different services using multiple tabs simultaneously for the same room and time.
    checkDouble(oldReceipt, newService) {
        if(oldReceipt.length === 0) {
            return false
        } else {
            for(let i = 0; oldReceipt.length > i; i++) {
                let matchOne = false;
                oldReceipt[i].day == newService.day ? matchOne = true : matchOne = false;
                //If the date matches, compare timeslots.
                if(matchOne) {
                    let duplicate = oldReceipt[i].app.filter(ele => newService.app.includes(ele))
                    if(duplicate.length > 0 && oldReceipt[i].ro === newService.ro) {
                        //If an appointment on olReceipt overlaps with newService appointment, return true.
                        return true
                    }
                }
            }
            return false
        }
    }
    //It will make a list of already selected rooms and timeslots to exclude from the schedule of other services being selected (prevents overbooking).
    scheduleCheck() {
        return
    }
    //Checks to see if a selected service's room & appointment time are still available since the customer last placed it in the cart.
    checkAvailable(service, room, appointment) {
        return true
    }
    //Removes an item from the local storage list, and returns the removed item if the back parameter is true
    removeItem(index, back=false) {
        let list = localStorage.getItem("spa_maluge_cart");
        list === null ? list = [] : list = JSON.parse(list);
        let removed = list.splice(index, 1);
        localStorage.setItem("spa_maluge_cart", JSON.stringify(list));
        if(back) {
            return removed[0]
        }
    }
}

export default new shopCheck();