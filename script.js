
const container = document.querySelector('#container');

var i, j;

for (i = 0; i < 16; i++) {

    var col = document.createElement('div');

    for (j = 0; j < 16; j++) {

        var cell = document.createElement('div');

        cell.setAttribute('class', 'cell');
        cell.style.height = '56px';
        cell.style.width = '56px';

        cell.addEventListener('mouseenter', function (e) {
            
            e.target.style.backgroundColor = 'black';
        });
        
        col.appendChild(cell);
    }

    col.style.float = 'left';
    container.appendChild(col);
}

var resizeButton = document.createElement('button');
resizeButton.textContent = 'Resize';
resizeButton.style.position = 'relative';
resizeButton.style.left = '7.5em';
resizeButton.style.top = '1.5em';
resizeButton.style.fontSize = '2em';
resizeButton.addEventListener("click", resizeGrid);


var clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.style.position = 'relative';
clearButton.style.left = '14.8em';
clearButton.style.top = '1.5em';
clearButton.style.fontSize = '2em';
clearButton.addEventListener("click", clearGrid);

container.appendChild(resizeButton);
container.appendChild(clearButton);

function resizeGrid() {

    var numCells = prompt("Size of Grid");
    var size = 960 / numCells;
    container.innerHTML = '';

    for (j = 0; j < numCells; j++) {

        var col = document.createElement('div');

        for (i = 0; i < numCells; i++) {

            var cell = document.createElement('div');

            cell.setAttribute('class', 'cell');
            cell.style.height = (size-4) + 'px';
            cell.style.width = (size-4) + 'px';

            cell.addEventListener('mouseenter', function (e) {
            
                e.target.style.backgroundColor = 'black';
            });

            col.appendChild(cell);
        }

        col.style.float = 'left';
        
        container.appendChild(col);
    }
}

function clearGrid () {

    var cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell) => {

        cell.style.backgroundColor = 'white';
    });
}