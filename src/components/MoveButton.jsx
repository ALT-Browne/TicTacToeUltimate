import React from 'react';
import css from "./styles.module.css";

const MoveButton = ({ onClick, description }) => {
    return <button className={css["move-button"]} onClick={onClick}>{description}</button>;
}

export default MoveButton;