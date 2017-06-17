/**
 * Road map
 * 1- ajax request function
 * 2- function render
 */

var URL = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23227d1cf38c49f98e701918f0d46fe4';
var nyContainer = document.getElementById("ny-info");
var btn = document.getElementById("btn");
/**
* Get url
* Callback
*/
btn.onclick = function() {
    ajax(URL, renderHTML); 
  };

  function ajax(url, callback) { 
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url);

    myRequest.onreadystatechange = function() {
        if(myRequest.status === 200) {
          callback(myRequest.responseText);
        }
    };

    myRequest.onload = function() {
      var myData = JSON.parse(myRequest.responseText);
      renderHTML(myData);
    };

    myRequest.send();
}

/**
* iterate throw articles to generate html
* @param {object} data - response
* @param {object} data.articles - response
* @param {object} data.image - response
* @param {object} data.date - response
*/

function renderHTML(data) {
  var content = '';
  

  //iteration throw news list
  data.articles.forEach(function (article){
    //article object
    //Images in API js
    var img = new Image(article.images);
    img.src = URL;
    //Date in API js
    var date = new Date(article.publishedAt);

    content += "<div class='article'>"; //parent
    content += "<a href='"+ article.url +"'>" + article.title +"</a>";
    content += "<img>"+ article.images +"</img>";
    content += "<p>" + article.description + "</p>";
    content += "<h4>" + article.author + "</h4>";
    content += "<p>" +article.publishedAt + "</p>";
    content += "</div>";
  });

 
  nyContainer.innerHTML = content;
}

