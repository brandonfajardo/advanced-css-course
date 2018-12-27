import React from 'react'
import './index.scss'

/* Unable to style CSS radio buttons, we will hide the input and display the span */
/* Since the label is connected to the input, the input will still be selected */

const Booking = () => {
    return <div>
        <input type="radio" id="small" className="radio-input" name="size" />
        <label for="small" className="radio-input-label">
            <span className="radio-button"></span>
            Small
        </label>

        <input type="radio" id="large" className="radio-input" name="size" />
        <label for="large" className="radio-input-label">
            <span className="radio-button"></span>
            Large
        </label>
    </div>
}

export default Booking;