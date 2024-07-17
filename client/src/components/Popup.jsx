import React from 'react';

function Popup(props) {
    if(props.loading && props.trigger == false) {
        return (
            <div className='popup'>
                <div className='flexColumn popupInner'>
                    <h3>Processing Your Reservation!</h3>
                    <h3>Please wait...</h3>
                </div>
            </div>
        )
    } else if (props.trigger) {
        return (
            <div className='popup'>
                <div className='flexColumn popupInner'>
                    <h3>Thank You For Your Reservation!</h3>
                    <button className='closeBtn' onClick={() => {props.setLoading(false); props.setTrigger(false); location.reload()}}>Close</button>
                </div>
            </div>
        )
    } else {
        return ""
    }
}

export default Popup;