import React from 'react';
import './Popup.css'

const Popup = (props) => {
    return (
        <>
            {props.visible &&
            <div className="popup__wrapper" onClick={() => props.setVisible(false)}>
                <div className="popup" onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>}
        </>
    );
};

export default Popup;
