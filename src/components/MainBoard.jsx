import React from 'react';
import MainBoardSquare from "./MainBoardSquare";
import css from "./styles.module.css";

const MainBoard = ({ mainBoardSquares, winner }) => {

        const renderMainBoard = (mainBoardSquares, winner) => {
                const board = [];
                for (let i = 0; i < 9; i++) {
                        // Check which squares are part of a winning combination, if any.
                        const winningSquare = winner[0] && winner[1].some(j => j === i) ? true : false;
                        board.push(<MainBoardSquare key={i} value={mainBoardSquares[i]} winningSquare={winningSquare} />);
                }
                return board;
        }

        return (
                <div className={css["progress-board-container"]}>
                        <div className={css["text"]}>Result</div>
                        <div className={css["progress-board"]}>
                                {renderMainBoard(mainBoardSquares, winner)}
                        </div>
                </div>
        );
}

export default MainBoard;