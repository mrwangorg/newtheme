let articles = document.querySelectorAll(".article-title");

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", function () {
        let articleContent = this.nextElementSibling.querySelector(".article-content");
        let isOpen = this.classList.contains("open");

        for (let i = 0; i < articles.length; i++) {
            articles[i].classList.remove("open");
            articles[i].nextElementSibling.querySelector(".article-content").classList.remove("show");
        }

        if (!isOpen) {
            this.classList.add("open");
            articleContent.classList.add("show");
        }
    });
}
