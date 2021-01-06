// reference all elements
const container = document.querySelector('#container');
const height = document.querySelector('#height').value;



function makeGrid(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'gridCells';
    }; 
    container.style.setProperty('--gridRow', rows);
    container.style.setProperty('--gridColumn', columns);
};  

// default 16 x 16 grid
makeGrid(16, 16);

