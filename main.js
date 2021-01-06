// reference all elements

const container = document.querySelector('#container');
//const dims = document.querySelector('#dimensions').value;

function makeGrid(rows, columns) {
    

    for (i = 0; i < (rows * columns); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'gridCells';
    }; 
    container.style.setProperty('--gridRow', rows);
    container.style.setProperty('--gridColumn', columns);
};  

makeGrid(16, 16);


// let rows = document.getElementsByClassName('gridRows');
// let columns = document.getElementsByClassName('gridColumns');

// if (dims = Nan) {
//     alert("ERROR! Please submit a number.");
// }


// if (dims > 100) {
//     alert("ERROR! Max grid dimension is 99. Please submit a smaller number");
// }



// default 16 x 16 grid
// function defaultGrid () {
//     makeRows(10);
//     makeColumns(10);
// }

// function makeRows(rowNum) {
//     for (r = 0; r < rowNum; r++) {
//         let row = document.createElement('div');
//         container.appendChild(row).className = 'gridRows';  
//     };
// }

// function makeColumns(colNum) {
//     for (i = 0; i < rows.length; i++) {
//         for (j = 0; j < colNum; j++) {
//             let column = document.createElement('div');
//             rows[j].appendChild(column).className = 'gridColumns';
//         };
//     };
// }
// container.style.cssText = `grid-template-columns: repeat(${dims}, 1fr)`;
// container.style.cssText = `grid-template-rows: repeat(${dims}, 1fr)`;





// css var(--grid-template-columns: repeat(dims, 1fr));
 //container.style.setProperty('--grid-template-columns'