import React, { useState, useEffect } from 'react';
import Board from "./Board";
import MainBoard from "./MainBoard";
import MoveHistory from "./MoveHistory";
import { winningCombinations, moveMap, subBoardCells } from "./constants";
import { calculateWinner } from "./helpers";
import css from "./styles.module.css";

const TicTacToeUltimate = () => {
        // Keep track of all moves made on the board during the game so the user can go back to any move and restart the game from there (until there is a winner).
        const [history, setHistory] = useState([Array(81).fill(null)]);
        const [currentMove, setCurrentMove] = useState(0);
        const currentSquares = history[currentMove];
        const previousSquares = currentMove > 0 ? history[currentMove - 1] : currentSquares;
        let nextSubBoardIndex = -1;
        if (currentMove > 0) {
                for (let i = 0; i < 81; i++) {
                        // Find location of the latest move and see if the nextSubBoard it determines is full.
                        if (currentSquares[i] != null && previousSquares[i] === null) {
                                const nextSubBoard = moveMap[i];
                                const nextSubBoardCells = subBoardCells[nextSubBoard];
                                !nextSubBoardCells.some(j => currentSquares[j] === null) ? nextSubBoardIndex = -1 : nextSubBoardIndex = nextSubBoard;
                        }
                }
        }

        // Keep track of the overall result of the game on the main board
        const [mainBoardHistory, setMainBoardHistory] = useState([Array(9).fill(null)]);
        const currentMainBoardSquares = mainBoardHistory[currentMove];
        const winner = calculateWinner(currentMainBoardSquares, winningCombinations);
        const draw = (!(winner[0]) && (currentMainBoardSquares.every(value => value != null) || currentMove == 81));
        const [gameResultSaved, setGameResultSaved] = useState(false);

        const handlePlay = (nextSquares, nextMainBoardSquares) => {
                const nextHistory = JSON.parse(JSON.stringify(history.slice(0, currentMove + 1)));
                nextHistory.push(nextSquares);
                setHistory(nextHistory);
                const nextMainBoardHistory = JSON.parse(JSON.stringify(mainBoardHistory.slice(0, currentMove + 1)));
                nextMainBoardHistory.push(nextMainBoardSquares);
                setMainBoardHistory(nextMainBoardHistory);
                setCurrentMove(nextHistory.length - 1);
        }

        const resetGame = () => {
                setHistory([Array(81).fill(null)]);
                setCurrentMove(0);
                setMainBoardHistory([Array(9).fill(null)]);
                setGameResultSaved(false);
        }

        return (
                <div className={css["tictactoe-gameplay"]}>
                        <div className={css["tictactoe-gameplay-cards-container"]}>
                                <div className={css["tictactoe-gameplay-cards-container-boards"]}>
                                        <div className={css["card"]}>
                                                <Board xIsNext={currentMove % 2 === 0} winner={winner} squares={currentSquares} mainBoardSquares={currentMainBoardSquares} onPlay={handlePlay} nextSubBoardIndex={nextSubBoardIndex} />
                                        </div>
                                        <div className={css["tictactoe-gameplay-cards-container"]}>
                                                <div className={css["card"]}>
                                                        <MainBoard mainBoardSquares={currentMainBoardSquares} winner={winner} />
                                                        <button className={css["reset-button"]} onClick={resetGame}>
                                                                Reset
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                                <MoveHistory history={history} jumpToMove={setCurrentMove} />
                        </div>
                </div>
        );
}

export default TicTacToeUltimate;