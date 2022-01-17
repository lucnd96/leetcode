/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const isValidRow = (r) => {
        const row = board[r];
        const map = {}
        for (let i = 0; i < row.length; i++) {
            if (row[i] !== ".") {
                if (!map[row[i]]) {
                    map[row[i]] = true
                } else {
                    return false;
                }
            }
        }
        return true
    }

    const isValidCol = (c) => {
        const map = {};
        for (let i = 0; i < board.length; i++) {
            const key = board[i][c]
            if (key !== ".") {
                if (!map[key]) {
                    map[key] = true
                } else {
                    return false
                }
            }
        }
        return true
    }

    const isValidColRow = () => {
        for (let i = 0; i < board.length; i++) {
           if (!isValidRow(i) || !isValidCol(i)) {
               return false
           }
        }
        return true
    }
    if (!isValidColRow()) {
        return false
    }

    const isValidCube = (x,y) => {
        const map = {};
        for (let i = x; i < x + 3; i++) {
            for (let j = y; j < y + 3; j++) {
                const key = board[i][j];
                if (key !== ".") {
                    if (!map[key]) {
                        map[key] = true
                    } else {
                        return false
                    }
                }
            }
        }
        return true;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!isValidCube(3 * i, 3 * j)) {
                return false
            }
        }
    }
    return true
};

const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
console.log(isValidSudoku(board))
