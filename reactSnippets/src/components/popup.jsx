import React, { useState } from 'react'

const Popup = () => {
    const [isPopup, setIsPopup] = useState(false);

    const openPopup = () => {
        setIsPopup(true)
    }
    const closePopup = () => {
        setIsPopup(false)
    }
    return (
        <React.Fragment>
            <button id="openBtn" onClick={() => openPopup()}>Open Popup</button>

            {
                isPopup &&
                <dialog open>
                    <h2>Popup Title</h2>
                    <p>This is the content of the popup.</p>
                    <button id="closeBtn" onClick={() => closePopup()}>Close</button>
                </dialog>
            }
        </React.Fragment> 
  )
}

export default Popup