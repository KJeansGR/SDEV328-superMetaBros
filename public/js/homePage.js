const routerMount = "/smb"


const allProductsBtn = document.querySelector('#allProductsBtn');
const logInBtn = document.querySelector('#logInBtn');
const signUpBtn = document.querySelector('#signUpBtn');
const searchForm = document.querySelector('#searchForm');

searchForm.onsubmit = handleSearchFormSubmit;

allProductsBtn.addEventListener('click', () => {
  window.location.href = `${routerMount}/products`;
});
logInBtn.addEventListener('click', () => {
  window.location.href = `${routerMount}/loginPage`;
});

signUpBtn.addEventListener('click', () => {
  window.location.href = `${routerMount}/loginPage`;
});


async function handleSearchFormSubmit(e){

  e.preventDefault();

  const search = document.querySelector("#search").value;  
  const sortPrice = document.querySelector("#sortPrice").value;  
  const sortCategory = document.querySelector("#sortCategory").value;

  const url = `http://localhost:8001/smb/products?search=${search}&sortPrice=${sortPrice}&sortCategory=${sortCategory}`;

  const response = await fetch(url);
  const result = await response.json();
  if(!result) {return}
   
  
  const grid = document.querySelector(".products-grid");
  grid.innerHTML = "";
     result.data.forEach(product => {

      grid.innerHTML +=      `<div class="card product-card">
          <h3>${product.itemName}</h3>
          <span class="category-badge">${product.category}</span>
          <p class="product-info">${product.info}</p>
          <div class="card-footer">
              <span class="product-price">${Number(product.price).toFixed(2)}</span>
              <a href="/smb/products/${product.id}" class="btn-sm">View Details</a>
          </div>
      </div>`
    })
}

//POSSIBLE POST ROUTE MAYBE FOR USERS TABLE IF SWITCH THE LOGIC FOR THAT TABLE
// async function handleSearchFormSubmit(e){

//   e.preventDefault();

//   const itemName = document.querySelector("#search").value;  
//   const formValues = {
//       itemName,
//       price: 100,
//       info: "stuff",
//       category: "soda"
//   }
  
//   const url = "http://localhost:8001/smb/register";
//   const config = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formValues)
//   }

//   const response = await fetch(url, config);
//   const result = await response.json();
//   const grid = document.querySelector(".products-grid");

// const product = result.data;

// const card = document.createElement("div");
// card.classList.add("product-card");

// card.innerHTML = `
//   <h3>${product.itemName}</h3>
//   <p>$${product.price}</p>
//   <p>${product.info}</p>
//   <p>${product.category}</p>
// `;

// grid.appendChild(card);

// }