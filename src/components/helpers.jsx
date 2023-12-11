import React from 'react';

export const calculateWinner = (squares, winningLines) => {
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [squares[a], winningLines[i]];
        }
    }
    return [null, null];
}