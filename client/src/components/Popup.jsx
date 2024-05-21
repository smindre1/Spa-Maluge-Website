import React from 'react';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='flexColumn popupInner'>
                <h3>Thank You For Your Reservation!</h3>
                <button className='closeBtn' onClick={() => {props.setTrigger(false); location.reload()}}>Close</button>
            </div>
        </div>
    ) : ""
}

export default Popup;