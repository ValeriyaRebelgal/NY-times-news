/**
 * Road map
 * 1- ajax request function
 * 2- function render
 */

var URL = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23227d1cf38c49f98e701918f0d46fe4';
var nyContainer = document.getElementById("ny-info");
//var btn = document.getElementById("btn");

//btn.onclick function()
    ajax(url, callback) {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url);

    myRequest.onreadystatechange = function() {
        if(myRequest.status === 200) {
          callback(myRequest.responseText);
        }
    }
    myRequest.onload = function() {
      var myData = JSON.parse(myRequest.responseText);
      renderHTML(myData);
    };

    myRequest.send();
}

function renderHTML(data) {
  var content = '';
  data.articles.forEach(function(article){
    content += "<h1>" + article.title + "</h1>";
  });

  nyContainer.innerHTML = content;
}
