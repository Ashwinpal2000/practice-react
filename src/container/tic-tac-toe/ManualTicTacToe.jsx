import React, { useState } from "react";
import "./style.css"

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isTurn, setIsTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }

        }
        return false;
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        const copyState = [...state];
        copyState[index] = isTurn ? "X" : "O";
        setState(copyState);
        setIsTurn(!isTurn);
    };
    const handleReset = () => {
        setState(Array(9).fill(null));
        setIsTurn(!isTurn);

    }
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "8rem" }}>
                Multi-Player
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <div className="board_container">

                    {isWinner ? (<>{isWinner} WON the Game. <button onClick={handleReset}>Play Again</button> </>) :
                        (<>
                            <h4> Player {isTurn ? "X" : "O"},<br /><br />Please Move.It's your Turn.</h4>
                            <div className="board_row">
                                <Square onClick={() => handleClick(0)} value={state[0]} />
                                <Square onClick={() => handleClick(1)} value={state[1]} />
                                <Square onClick={() => handleClick(2)} value={state[2]} />
                            </div>
                            <div className="board_row">
                                <Square onClick={() => handleClick(3)} value={state[3]} />
                                <Square onClick={() => handleClick(4)} value={state[4]} />
                                <Square onClick={() => handleClick(5)} value={state[5]} />
                            </div>
                            <div className="board_row">
                                <Square onClick={() => handleClick(6)} value={state[6]} />
                                <Square onClick={() => handleClick(7)} value={state[7]} />
                                <Square onClick={() => handleClick(8)} value={state[8]} />
                            </div>
                        </>)}
                </div>
            </div>
        </>
    );
};

export default Board;


const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            style={{
                border: "1px solid",
                height: "100px",
                width: "100% ",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}
            className="square"
        >
            <h5>{props.value}</h5>

        </div>
    );
};

