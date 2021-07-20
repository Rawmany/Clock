// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


function Log({timeClick}) {

    let logItem = timeClick.map((item) => {
        return <li>{item}</li>
    })

    return (
        <div className={"showTime-container"}>
            <ul>
                {logItem}
            </ul>
        </div>
    )
}

export default Log