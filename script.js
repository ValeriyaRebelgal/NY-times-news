/**
 * Road map
 * 1- ajax request function
 * 2- function render
 */

var URL = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23227d1cf38c49f98e701918f0d46fe4';
var nyContainer = document.getElementById("ny-info");
//var btn = document.getElementById("btn");

//capturing , bubbling
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


//{
"author":"Michael D. Shear, Adam Goldman and Emily Cochrane",
  "title":"Steve Scalise Among 4 Shot at Baseball Field; Suspect Is Dead",
    "description":"A gunman opened fired as Republican members of a congressional baseball team held a practice. He was killed in a shootout.",
      "url":"https://www.nytimes.com/2017/06/14/us/steve-scalise-congress-shot-alexandria-virginia.html",
        "urlToImage":"https://static01.nyt.com/images/2017/06/14/us/14shooting/14shooting-facebookJumbo.jpg",
          "publishedAt":"2017-06-15T13:07:48Z"}