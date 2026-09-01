let news = [
  {
    id: 1,
    title: "Election Results",
    content: "Newly elected minister...",
  },
  {
    id: 2,
    title: "Sporting Success",
    content: "World Cup winners...",
  },
  {
    id: 3,
    title: "Tornado Warning",
    content: "Residents should prepare...",
  },
];

const newsList = document.getElementById("news-list");
const newsForm = document.getElementById("news-form");
const newsTitle = document.getElementById("news-title");
const newsContent = document.getElementById("news-content");
const stopBtn = document.getElementById("stop-btn");

const displayNews = () => {
  newsList.innerHTML = "";

  news.forEach((item) => {
    newsList.innerHTML += `
        <div class="news-card">
          <h3>${item.title}</h3>
          <p>${item.content}</p>
        </div>
      `;
  });
};

const addNews = (event) => {
  event.preventDefault();

  const title = newsTitle.value;
  const content = newsContent.value;

  if (title === "" || content === "") {
    alert("Please enter a title and content.");
    return;
  }

  const newItem = {
    id: news.length + 1,
    title: title,
    content: content,
  };

  news.push(newItem);

  newsTitle.value = "";
  newsContent.value = "";
};

displayNews();

const refreshInterval = setInterval(() => {
  displayNews();
}, 5000);

newsForm.addEventListener("submit", addNews);

stopBtn.addEventListener("click", () => {
  clearInterval(refreshInterval);
});
