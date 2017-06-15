var nyContainer = document.getElementById("ny-info");
var btn = document.getElementById("btn")

btn.addEventListener("click", function() {
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23227d1cf38c49f98e701918f0d46fe4');

myRequest.onload = function() {
	var myData = JSON.parse(myRequest.responseText);
	renderHTML(myData);
};

myRequest.send();
});

function renderHTML(data) {
	var htmlString = "this is a test";

	//for (i = 0; i < data.lenth; i++) {
		//htmlString += "<p>" + data[i].articles ".</p>";

      nyContainer.insertAdjacentHTML('beforeend', htmlString); 
	
}
