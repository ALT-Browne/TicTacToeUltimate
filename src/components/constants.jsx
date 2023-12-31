﻿import React from 'react';

// Each 3x3 subBoard is mapped to its winning combinations, using the indices of the bigger board.
export const subBoardWinningCombinations = [
    [[0, 1, 2], [9, 10, 11], [18, 19, 20], [0, 9, 18], [1, 10, 19], [2, 11, 20], [0, 10, 20], [2, 10, 18]],
    [[3, 4, 5], [12, 13, 14], [21, 22, 23], [3, 12, 21], [4, 13, 22], [5, 14, 23], [3, 13, 23], [5, 13, 21]],
    [[6, 7, 8], [15, 16, 17], [24, 25, 26], [6, 15, 24], [7, 16, 25], [8, 17, 26], [6, 16, 26], [8, 16, 24]],
    [[27, 28, 29], [36, 37, 38], [45, 46, 47], [27, 36, 45], [28, 37, 46], [29, 38, 47], [27, 37, 47], [29, 37, 45]],
    [[30, 31, 32], [39, 40, 41], [48, 49, 50], [30, 39, 48], [31, 40, 49], [32, 41, 50], [30, 40, 50], [32, 40, 48]],
    [[33, 34, 35], [42, 43, 44], [51, 52, 53], [33, 42, 51], [34, 43, 52], [35, 44, 53], [33, 43, 53], [35, 43, 51]],
    [[54, 55, 56], [63, 64, 65], [72, 73, 74], [54, 63, 72], [55, 64, 73], [56, 65, 74], [54, 64, 74], [56, 64, 72]],
    [[57, 58, 59], [66, 67, 68], [75, 76, 77], [57, 66, 75], [58, 67, 76], [59, 68, 77], [57, 67, 77], [59, 67, 75]],
    [[60, 61, 62], [69, 70, 71], [78, 79, 80], [60, 69, 78], [61, 70, 79], [62, 71, 80], [60, 70, 80], [62, 70, 78]]
]

// Standard 3x3 board.
export const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// The following array maps each cell index to the corresponding subBoard it determines for the next move.
export const moveMap = [0, 1, 2, 0, 1, 2, 0, 1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 6, 7, 8, 6, 7, 8, 6, 7, 8, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 6, 7, 8, 6, 7, 8, 6, 7, 8, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5, 6, 7, 8, 6, 7, 8, 6, 7, 8]

// The following array maps each subBoard to the array of cells it contains.
export const subBoardCells = [[0, 1, 2, 9, 10, 11, 18, 19, 20], [3, 4, 5, 12, 13, 14, 21, 22, 23], [6, 7, 8, 15, 16, 17, 24, 25, 26], [27, 28, 29, 36, 37, 38, 45, 46, 47], [30, 31, 32, 39, 40, 41, 48, 49, 50], [33, 34, 35, 42, 43, 44, 51, 52, 53], [54, 55, 56, 63, 64, 65, 72, 73, 74], [57, 58, 59, 66, 67, 68, 75, 76, 77], [60, 61, 62, 69, 70, 71, 78, 79, 80]]

// The following array maps each cell to the subBoard which contains it.
export const cellToSubBoardMap = [0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 3, 3, 3, 4, 4, 4, 5, 5, 5, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8, 6, 6, 6, 7, 7, 7, 8, 8, 8]
