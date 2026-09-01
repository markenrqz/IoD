// Exercise 1 and 2 data
const data = [
  { name: "bob", age: 23 },
  { name: "alice", age: 39 },
];

// Exercise 1: addCard can accept dynamic content
const addCard = (person) => {
  const template = document
    .getElementById("person-template")
    .content.cloneNode(true);

  template.querySelector(".person-name").textContent = person.name;
  template.querySelector(".person-age").textContent = "Age: " + person.age;

  document.getElementById("person-list").appendChild(template);
};

// Exercise 2: call addCard repeatedly using data from the array
data.forEach((person) => {
  addCard(person);
});

// Exercise 3 data
const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
    },
  ],
};

// Display artist name
document.getElementById("artist-profile").innerHTML =
  "<h3>Artist: " + artist.name + "</h3>";

// Function to add portfolio cards
const addPortfolioCard = (item) => {
  const template = document
    .getElementById("portfolio-template")
    .content.cloneNode(true);

  template.querySelector(".portfolio-title").textContent = item.title;
  template.querySelector(".portfolio-image").src = item.url;
  template.querySelector(".portfolio-image").alt = item.title;

  document.getElementById("portfolio-list").appendChild(template);
};

// Generate portfolio cards
artist.portfolio.forEach((item) => {
  addPortfolioCard(item);
});
