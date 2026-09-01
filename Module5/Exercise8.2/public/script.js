const productList = document.getElementById("productList");
const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

let products = [];

const getCategoryIcon = (category) => {
  if (category === "men's clothing") {
    return "mdi:tshirt-crew";
  }

  if (category === "women's clothing") {
    return "mdi:hanger";
  }

  if (category === "jewelery") {
    return "mdi:diamond-stone";
  }

  if (category === "electronics") {
    return "mdi:laptop";
  }

  return "mdi:shopping";
};

const displayProducts = (items) => {
  productList.innerHTML = "";

  items.forEach((product) => {
    const shortDescription = product.description.substring(0, 100);
    const categoryIcon = getCategoryIcon(product.category);

    productList.innerHTML += `
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card">
          <img 
            src="${product.image}" 
            class="card-img-top product-image" 
            alt="${product.title}"
          >

          <div class="card-body">
            <iconify-icon 
              icon="${categoryIcon}" 
              class="category-icon">
            </iconify-icon>

            <h5 class="card-title">${product.title}</h5>
            <p class="card-text"><strong>Price:</strong> $${product.price}</p>
            <p class="card-text"><strong>Category:</strong> ${product.category}</p>
            <p class="card-text">${shortDescription}...</p>
          </div>
        </div>
      </div>
    `;
  });
};

const loadCategories = (items) => {
  const categories = [];

  items.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  categories.forEach((category) => {
    categorySelect.innerHTML += `
      <option value="${category}">${category}</option>
    `;
  });
};

const filterProducts = () => {
  const selectedCategory = categorySelect.value;
  const searchText = searchInput.value.toLowerCase();
  const selectedSort = sortSelect.value;

  let filteredProducts = [...products];

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.category === selectedCategory;
    });
  }

  if (searchText !== "") {
    filteredProducts = filteredProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchText);
    });
  }

  if (selectedSort === "title") {
    filteredProducts.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  if (selectedSort === "price-low") {
    filteredProducts.sort((a, b) => {
      return a.price - b.price;
    });
  }

  if (selectedSort === "price-high") {
    filteredProducts.sort((a, b) => {
      return b.price - a.price;
    });
  }

  displayProducts(filteredProducts);
};

fetch("/api/products")
  .then((response) => response.json())
  .then((json) => {
    products = json;

    loadCategories(products);
    displayProducts(products);
  });

categorySelect.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);
sortSelect.addEventListener("change", filterProducts);
