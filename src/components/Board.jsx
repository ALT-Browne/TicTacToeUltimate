import React from 'react';
import Square from "./Square";
import { subBoardWinningCombinations, cellToSubBoardMap } from "./constants";
import { calculateWinner } from "./helpers";
import css from "./styles.module.css";


const Board = ({ xIsNext, squares, mainBoardSquares, onPlay, nextSubBoardIndex, winner }) => {

        const handleClick = (clickableSquare, i) => {
                if (clickableSquare) {
                        const nextSquares = JSON.parse(JSON.stringify(squares.slice()));
                        if (xIsNext) {
                                nextSquares[i] = "X";
                        } else {
                                nextSquares[i] = "O";
                        }
                        const nextMainBoardSquares = JSON.parse(JSON.stringify(mainBoardSquares.slice()));
                        // Only check for a subBoard winner if there hasn't already been one.
                        if (!nextMainBoardSquares[cellToSubBoardMap[i]]) {
                                const subBoardWinner = calculateWinner(nextSquares, subBoardWinningCombinations[cellToSubBoardMap[i]])[0];
                                if (subBoardWinner) {
                                        nextMainBoardSquares[cellToSubBoardMap[i]] = subBoardWinner;
                                }
                        }
                        onPlay(nextSquares, nextMainBoardSquares);
                }
        }

        const renderBoard = (isGameOver) => {
                const board = [];
                for (let i = 0; i < 81; i++) {
                        const squareValue = squares[i];
                        const clickableSquare = (nextSubBoardIndex === -1 || cellToSubBoardMap[i] === nextSubBoardIndex) && !squareValue ? true : false;
                        board.push(<Square key={i} clickable={clickableSquare} value={squareValue} isGameOver={isGameOver} onSquareClick={() => handleClick(clickableSquare, i)} />);
                }
                return board;
        }

        let status;
        if (winner[0]) {
                status = winner[0] == "O" ? "Winner: O" : "Winner: X";
        } else {
                status = "Next player: " + (xIsNext ? "X" : "O");
        }
        if ((mainBoardSquares.every(value => value != null) || squares.every((s) => s != null)) && !winner[0]) {
                status = "Draw";
        }
        const isGameOver = ["Winner: X", "Winner: O", "Draw"].includes(status);

        return (
                <div className={css["play-board-container"]}>
                        <div className={css["text"]}>{status}</div>
                        <div className={xIsNext ? `${css["board"]} ${css["x-is-next"]}` : `${css["board"]} ${css["circle-is-next"]}`} id="board">
                                {renderBoard(isGameOver)}
                        </div>
                </div>

        );
}

export default Board;