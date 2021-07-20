import React from 'react'

function ClockBtns({showClickTime, changeDirection}) {
    return (
        <div className="clockBtns">
            <button className="reverseBtn" onClick={() => {
                changeDirection();
            }}>Reverse
            </button>
            <button className="showLog" onClick={() => {
                showClickTime();
            }}>Log
            </button>
        </div>
    )
}

export default ClockBtns;