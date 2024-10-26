let currentQuery = "news"
let currentPage = 1;
const fetchNews = async (page, q) => {
    console.log("Fetching news...");
    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + q + '&' +
        'from=2024-10-20&' +
        'pageSize=20&' +
        'language=en&' +
        'page=' + page + '&' +
        'sortBy=popularity&' +
        'apiKey=03c0a9813b704119bededf95f94e568f';

    var req = new Request(url);

    let a = await fetch(req)
    let response = await a.json();
    console.log(JSON.stringify(response))

    let str = ""

    for (let item of response.articles) {
        if (item.urlToImage != null) {
            if (item.title && item.title.trim() !== "" && !item.title.includes("[Removed]")) {
                str = str + `<div class="card my-2 mx-2" style="width: 18rem;">
                    <img src="${item.urlToImage}" class="card-img-top" alt="..." style="margin-top: 12px; ">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>`
            }
        }
    }
    document.querySelector(".content").innerHTML = str
}

fetchNews(1, currentQuery)

search.addEventListener("click", (e) => {
    e.preventDefault()
    let query = searchInput.value
    currentQuery = query
    fetchNews(1, currentQuery)
})
prev.addEventListener("click", (e) => {
    e.preventDefault()
    if (currentPage > 1) {
        currentPage = currentPage - 1
        fetchNews(currentPage, currentQuery)
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
})
next.addEventListener("click", (e) => {
    e.preventDefault()
    currentPage = currentPage + 1
    fetchNews(currentPage, currentQuery)
    window.scrollTo({ top: 0, behavior: 'auto' });
})

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        if (e.target.textContent.toLowerCase() === "home") {
            currentQuery = "news";
        } else {
            currentQuery = e.target.textContent.toLowerCase();
        }
        currentPage = 1
        fetchNews(currentPage, currentQuery)
    })
})