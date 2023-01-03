import React from 'react'
import Board from "./Board"

const BreakoutGame = ({ currentUser }) => {
    return (
        <div>
            <Board currentUser={currentUser}/>
        </div>
    )
}

export default BreakoutGame
