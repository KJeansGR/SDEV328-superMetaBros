const routerMount = "/smb"


const allProductsBtn = document.querySelector('#allProductsBtn');
const logInBtn = document.querySelector('#logInBtn');
const signUpBtn = document.querySelector('#signUpBtn');

allProductsBtn.addEventListener('click', () => {
  window.location.href = `${routerMount}/products`;
});
logInBtn.addEventListener('click', () => {
  window.location.href = `${routerMount}/loginPage`;
});

signUpBtn.addEventListener('click', () => {
  window.location.href = `${routerMount}/loginPage`;
});


