const pageIndex = [
    {
        id: "test",
        title: "Test",
        summary: "Test page for testing the search system"
    },
    {
        id: "f_template",
        title: "Template",
        summary: "This page serves as a template for making other pages.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
]
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randPage() {
    var page = pageIndex[randInt(0, pageIndex.length)]
    window.location.href = page == undefined ? "404.html" : `p/${page.id}/index.html`
}
// shitcode perhaps but it works
function search() {
    var query = document.getElementById("queryBox").value
    var results = document.getElementById("resultBox")
    var count = 0;
    results.innerHTML = ""
    for (var i = 0; i < pageIndex.length; i++) {
        var page = pageIndex[i]
        if (page.title.toLowerCase().includes(query.toLowerCase()) || page.summary.toLowerCase().includes(query.toLowerCase())) {
            results.innerHTML += `<br><a href="p/${page.id}/index.html">${page.title}</a><br>
            ${page.summary}<br>`;
            count++
        }
    }
    results.innerHTML += `<br><b>${count}</b> result(s)`
}
var countLabel = document.getElementById("pagecount")
if (countLabel != undefined) { 
    var count = 0
    for (var i = 0; i < pageIndex.length; i++) {
        var page = pageIndex[i]
        if (!page.id.startsWith("f_")) count++
    }
    countLabel.innerText = count
}