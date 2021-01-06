// reference all elements
const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
//const submit = document.querySelector('#submit');
reset.addEventListener('click', newGrid);

// default 16 x 16 grid
defaultGrid(16,16);

function defaultGrid(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        let grid = document.createElement('div');
        container.appendChild(grid).className = 'gridCells';
    }; 
    container.style.setProperty('--gridRow', rows);
    container.style.setProperty('--gridColumn', columns);
};  

// new grid based on prompt

function newGrid() {
    
    let newsize = prompt("Enter new grid size:");
    
    if (newsize < 1 || newsize > 35 || Number.isNaN(newsize)) {
        alert("Please enter a number between 1 - 35");
        newGrid();
    } else {
        clearGrid();
        defaultGrid(newsize, newsize);
    }
};

function clearGrid() {
    const mainGrid = Array.from(container.childNodes);
    mainGrid.forEach((element) => {
        container.removeChild(element);
    });
}   
