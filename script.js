var url = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=23227d1cf38c49f98e701918f0d46fe4'

function setup() {
	noCanvas();
	loadJSON(url, gotData);
}

function gotData(data) {
	var articles = data.response.docs;

	for (var i = 0; i < articles.length; i++) {
		createElement('h1', articles[i].headline.main);
		createP(articles[i].snipet);
	}
	//println(data.response.docs[1].headline.main);
}