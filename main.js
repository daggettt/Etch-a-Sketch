// reference all elements

const container = document.querySelector('#container');
let rows = document.querySelectorAll('.gridRows');
let columns = document.querySelectorAll('.gridColumns');

// default 16 x 16 grid

function defaultGrid () {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRows';
    };
};

function makeColumns(colNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < colNum; j++) {
            let column = document.createElement('div');
            rows[j].appendChild(column).className = 'gridColumns';
        };
    };
};

defaultGrid();
console.log(rows.length);