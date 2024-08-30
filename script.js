function createTable() {
    // Get the table element
    const table = document.getElementById('myTable');
    
    // Clear any existing content in the table
    table.innerHTML = '';
    
    // Prompt the user for the number of rows and columns
    const numRows = parseInt(prompt('Input number of rows'), 10);
    const numCols = parseInt(prompt('Input number of columns'), 10);
    
    // Validate the input
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    // Create the table rows and cells
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = document.createElement('tr');
        
        for (let j = 0; j < numCols; j++) {
            // Create a new cell
            const cell = document.createElement('td');
            
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
            
            // Append the cell to the row
            row.appendChild(cell);
        }
        
        // Append the row to the table
        table.appendChild(row);
    }
}
