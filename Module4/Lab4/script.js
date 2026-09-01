const cardList = document.getElementById("card-list");

const createCard = () => `
  <div class="col-12 col-md-6 col-lg-3">
    <div class="card">
      <img 
        src="https://placehold.co/300x180?text=Image+cap" 
        class="card-img-top" 
        alt="Image cap"
      >
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
      </div>
    </div>
  </div>
`;

for (let i = 1; i <= 8; i++) {
  cardList.innerHTML += createCard();
}
