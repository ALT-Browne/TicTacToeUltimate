import React from 'react';
import css from "./styles.module.css";

const MainBoardSquare = ({ value, winningSquare }) => {
    if (winningSquare) {
        if (value === "X") {
            return <div className={`${css["progress-square"]} ${css["x"]} ${css["winning-square"]}`}></div>;
        } else {
            return <div className={`${css["progress-square"]} ${css["circle"]} ${css["winning-square"]}`}></div>;
        }
    } else {
        if (value === "X") {
            return <div className={`${css["progress-square"]} ${css["x"]}`}></div >;
        } else if (value === "O") {
            return <div className={`${css["progress-square"]} ${css["circle"]}`}></div >;
        } else {
            return <div className={css["progress-square"]}></div>;
        }
    }
}

export default MainBoardSquare;