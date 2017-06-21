/**
 * Road map
 * 1- ajax request function
 * 2- function render
 */

var URL = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23227d1cf38c49f98e701918f0d46fe4';
var nyContainer = document.getElementById("ny-info");
var btn = document.getElementById("btn");

/**
* Add Source Selector with an Id
* Add Sort By Selector with an Id
*/
var source = document.getElementById('source');
var sortBy = document.getElementById("sortBy");

/**
* Get url
* Callback
*/
btn.onclick = function() {
  var url = 'https://newsapi.org/v1/articles?source='+ source.value +'&sortBy='+ sortBy.value +'&apiKey=23227d1cf38c49f98e701918f0d46fe4';
    ajax(url, renderHTML); 
    document.getElementById('source').value;
    document.getElementById('sortBy').value;
  };

  function ajax(url, callback) { 
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', url);

    myRequest.onload = function() {
      var myData = JSON.parse(myRequest.responseText);
      renderHTML(myData);
    };

    myRequest.send();
}

/**
* iterate throw articles to generate html
* @param {object} data
* @param {Array} data.articles
* @param {string} data.sortBy
* @param {string} data.source
* @param {string} data.status
**/

function renderHTML(data) {
  var content = '';
 //Sort By Error fixing
  var status = true;
  if (data.status === 'error') {
    alert(data.message);
  } else {
    alert();
  }

  //iteration throw news list
  data.articles.forEach(function (article){
    //article object
    //Date in API js
    var date = new Date(article.publishedAt);
    var formatedDate = getFormatedDate(date);

    content += "<div class='article'>"; //parent
    content += "<a class='article-title' href='"+ article.url +"'>" + article.title +"<br><br>"+"</a>";
    content += "<img class='article-img' src='"+article.urlToImage+"' alt='"+article.title+"<br><br>"+"'>";
    content += "<p class='article-publishedAt'>" + formatedDate + "<br><br>"+ "</p>";
    content += "<p class='article-description'>" + article.description + "<br><br>"+"</p>";
    content += "<span class='article-author'>" +article.author + "<br><br>"+"</span>";
    content += "<hr>";
    content += "<br>";
    content += "</div>";
  });
  nyContainer.innerHTML = content;
}
/** Change date format and display changes
*/
function getFormatedDate(date) {
var formatedDate = new Date(); 
return formatedDate;
}



