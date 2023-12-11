import React from 'react';
import css from "./styles.module.css";

const Square = ({ clickable, value, isGameOver, onSquareClick }) => {
    if (!isGameOver) {
        if (clickable) {
            return <div className={`${css["square"]} ${css["clickable"]}`} onClick={onSquareClick}></div>;
        } else {
            if (value === "X") {
                return <div className={`${css["square"]} ${css["x"]}`} onClick={onSquareClick}></div>;
            }
            else if (value === "O") {
                return <div className={`${css["square"]} ${css["circle"]}`} onClick={onSquareClick}></div>;
            }
            else {
                return <div className={`${css["square"]}`} onClick = { onSquareClick }></div>;
            }
        }
    } else {
        if (value === "X") {
            return <div className={`${css["square"]} ${css["x"]}`}></div>;
        }
        else if (value === "O") {
            return <div className={`${css["square"]} ${css["circle"]}`}></div>;
        }
        else {
    return <div className={css["square"]}></div>;
        }
    }
}

export default Square;