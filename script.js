const fetchNews = async (place) => {
  var url = 'https://newsapi.org/v2/top-headlines?' +

    'country=' + place +
    'pageSize=7&' +
    'apiKey=b4bf131964074315b4cb6a300a957ee6'
    ;
  var req = new Request(url);
  let a = await fetch(req);
  let response = await a.json();
  let str = '';
  b = document.querySelector(".card");

  for (j of response.articles) {
    str += `<div class="card">
      <div class="card-body">
        <img src="${j.urlToImage}">
        <h5 class="card-title">${j.title}</h5>
        <p class="card-text">${j.description}</p> 
        <a href="${j.url}"  target="_blank" >Read More</a>
      </div>
    </div>`
    b.innerHTML = str;
  }
};

fetchNews("in&")

