// from data.js
var tableData = data;

var submit = d3.select("#submit");

d3.select("#filter-btn").on("click", function() {

    d3.event.preventDefault();

    var input = d3.select("#datetime");

    var sightingDate = input.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === sightingDate);

    var tbody = d3.select("tbody");

    var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

    filteredData.forEach(() => {
        
        var rows = tbody.selectAll("tr")
		  .data(filteredData)
		  .enter()
          .append("tr");
          
        var cells = rows.selectAll('td')
        .data(function (row) {
        return columns.map(function (column) {
            return {column: column, value: row[column]};
            });
        })
        .enter()
        .append('td')
        .text(function (info) { return info.value; });

    return tbody;
        
    });
    
});
