import './css/style.css';
import React from 'react';

export default props => {
    let {sender, text} = props;

    return (

        <div className="d-flex flex-column msg">
            {sender && <strong>{sender}:</strong>}
            {!sender && <strong>You:</strong>}
            <p>{sender || (!sender && text) ? text : 'Cyber answer...'}</p>
        </div>

    )
}
       