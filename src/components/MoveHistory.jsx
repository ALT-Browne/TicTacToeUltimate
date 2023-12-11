import React, { useState } from 'react';
import MoveButton from "./MoveButton";
import css from "./styles.module.css";

const MoveHistory = ({ history, jumpToMove }) => {

    // Find location of all moves in the history and set appropriate description for each one, to show the user.
    const moves = history.map((squares, move) => {
        let description;
        let currMoveLocation = [null, null];
        if (move > 0) {
            const prevMove = history[move - 1];
            for (let i = 0; i < 81; i++) {
                if (squares[i] != null && prevMove[i] === null) {
                    currMoveLocation = [Math.floor(i / 9) + 1, (i % 9) + 1];
                }
            }
            description = "Go to move #" + move + " (row " + currMoveLocation[0] + ", col " + currMoveLocation[1] + ")"
        } else {
            description = 'Go to game start';
            currMoveLocation = [null, null];
        }

        return (
            <MoveButton key={move} description={description} onClick={() => jumpToMove(move)} />
        );
    });
    const [movesIsAscending, setMovesIsAscending] = useState(true);

    const changeMovesOrder = () => {
        setMovesIsAscending(!movesIsAscending);
    }

    return (
        <div className={css["card"]}>
            <div className={css["game-info"]}>
                <div className={css["move-history"]}>
                    {movesIsAscending ? moves : moves.reverse()}
                </div>
                <button className={css["descending-button"]} onClick={() => changeMovesOrder()}>{movesIsAscending ? "Descending" : "Ascending"}</button>
            </div>
        </div>
    );
}

export default MoveHistory;