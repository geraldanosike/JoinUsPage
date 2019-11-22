import React from 'react'
import Buttons from '../components/Button'

export const NewsLetter = () => {
    return (
        <div>
            <div className="text-center my-5">
        <h3>Get notified when there are job opportunities</h3>
        {/* <form> */}
        {/* <input /> */}
        <Buttons myBtnClass="notification">Notify Me</Buttons>
        {/* </form> */}
      </div>
        </div>
    )
}
