const routerMount = "/smb";

document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 SuperMetaBros Frontend Engine Active!");

    // --- 1. NAVIGATION BUTTONS ---
    const allProductsBtn = document.querySelector('#allProductsBtn');
    const logInBtn = document.querySelector('#logInBtn');
    const signUpBtn = document.querySelector('#signUpBtn');

    if (allProductsBtn) {
        allProductsBtn.addEventListener('click', () => {
            window.location.href = `${routerMount}/products`;
        });
    }
    if (logInBtn) {
        logInBtn.addEventListener('click', () => {
            window.location.href = `${routerMount}/loginPage`;
        });
    }
    if (signUpBtn) {
        signUpBtn.addEventListener('click', () => {
            window.location.href = `${routerMount}/loginPage`;
        });
    }

    // --- 2. SEARCH / FILTER FORM ---
    const searchForm = document.querySelector('#searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearchFormSubmit);
    }

    // --- 3. BACKGROUND BEVERAGE ORDERS (REST Protocols) ---
    const grid = document.querySelector(".products-grid");
    if (grid) {
        grid.addEventListener('submit', handleOrderFormSubmit);
    }
});

// --- 4. ASYNC ORDER HANDLER (Extracted to pass ESLint) ---
async function handleOrderFormSubmit(e) {
    // Only intercept if the submitted form is an order form
    if (!e.target || !e.target.classList.contains('order-form')) return;
    
    e.preventDefault(); // 🛑 Safely stop the transition to the raw JSON page!
    
    const form = e.target;
    const formData = new FormData(form);
    const data = {
        productId: formData.get('productId'),
        quantity: formData.get('quantity')
    };

    try {
        const response = await fetch('/smb/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert(`Success! ${result.receipt.quantity}x ${result.receipt.item} ordered.\nTotal: ${result.receipt.totalPaid}`);
        } else {
            alert(`Order Failed: ${result.message}`);
        }
    } catch (error) {
        alert("Network error processing your order.");
    }
}

// --- 5. ASYNC SEARCH HANDLER ---
async function handleSearchFormSubmit(e) {
    e.preventDefault();

    const search = document.querySelector("#search").value;  
    const sortPrice = document.querySelector("#sortPrice").value;  
    const sortCategory = document.querySelector("#sortCategory").value;

    const url = `http://localhost:8001/smb/products?search=${search}&sortPrice=${sortPrice}&sortCategory=${sortCategory}`;
       

    try {
        const response = await fetch(url);
        const result = await response.json();
        if (!result || !result.data) return;
        
        const grid = document.querySelector(".products-grid");
        grid.innerHTML = "";
        
        result.data.forEach(product => {
            grid.innerHTML += `<div class="card product-card">
                <h3>${product.itemName}</h3>
                <span class="category-badge">${product.category}</span>
                <p class="product-info">${product.info}</p>
                
                <form action="/smb/orders" method="POST" class="order-form">
                    <input type="hidden" name="productId" value="${product.id}">
                    <div class="qty-container">
                        <label for="qty-${product.id}">Qty:</label>
                        <input type="number" id="qty-${product.id}" name="quantity" value="1" min="1" class="qty-input">
                    </div>
                    <button type="submit" class="btn-primary btn-order">Order Beverage</button>
                </form>

                <div class="card-footer">
                    <span class="product-price">$${Number(product.price).toFixed(2)}</span>
                    <a href="/smb/products/${product.id}" class="btn-sm">View Details</a>
                </div>
            </div>`;
        });
      
        if (grid.innerHTML.trim() === "") {
            grid.innerHTML = `
            <div class="hero-content">
                <h1>Search came up dry</h1>
                <p>Try again with different search terms?</p>
            </div>`;
        }  
    } catch (err) {
        console.error("Error running client search filter:", err);
    }
}
