import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import TicTacToeUltimate from './components/TicTacToeUltimate';
import '@fontsource/roboto';

ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
                <TicTacToeUltimate />
        </BrowserRouter>
);
