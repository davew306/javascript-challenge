
var ufoData = data;

var bodyTable = d3.select("tbody");
var btn= d3.select("#filter-btn");
var dataTime = d3.select("#datetime");

var categories = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var display = (dataInput) => {

	dataInput.forEach(x => {
		var row = bodyTable.append("tr");
		categories.forEach(column => row.append("td").text(x[column])
		)
	});
}


display(data);


btn.on("click", () => {
	d3.event.preventDefault();

	var filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)


	bodyTable.html("");

	let response = {
		filterDate
 
})




