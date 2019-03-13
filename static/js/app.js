
// CREATE TABLE
// using d3 to select the table
var tBody = d3.select('.table>tbody');
// starting the loop with forEach to create the table
data.forEach((ufo) => {
    tBody.append("tr");
// using object.values to store the values from the ufo sighting data
    Object.values(ufo).forEach((uValues) => {
        // adding the data cells
        var cell = tBody.append("td");
        // placing values in the table
        cell.text(uValues);
    });
  });

//   SEARCH THROUGH DATE/TIME COLUMN AND RETURN RESULTS THAT MATCH USER INPUT
// Use d3 to select the filter table button
  var filter = d3.select(".btn-default");

  filter.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var filterElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var filterValue = filterElement.property("value");
  
    var uFilter = data.filter(ufo => ufo.datetime === filterValue);
 
    console.log(uFilter);

    d3.selectAll('td').remove()

  // using d3 to select the table

    var tBody = d3.select('.table>tbody');
    
// starting the loop with forEach to create the table
    uFilter.forEach((filteredufo) => {
      tBody.append("tr");
// using object.values to store the values from the ufo sighting data
    Object.values(filteredufo).forEach((ufValues) => {
        // adding the data cells
        var cell = tBody.append("td");
        // placing values in the table
        cell.text(ufValues);
    });
  });
    
  });
  