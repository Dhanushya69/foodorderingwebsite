
/* loginpopup */
document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('loginPopup');
    const openLogin = document.getElementById('openLogin');
    const closeLogin = document.getElementById('closeLogin');

    openLogin.addEventListener('click', function() {
        loginPopup.style.display = 'block';
    });

    closeLogin.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });
});
/* cart popup */
const cartPage = document.getElementById('cart');
        const viewCartLink = document.getElementById('viewCartLink');

        viewCartLink.addEventListener('click', function () {
            // Toggle the visibility of the cart page as a popup
            cartPage.style.display = cartPage.style.display === 'block' ? 'none' : 'block';
        });
/* scroll to the respective one */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* to calculate the total amt */
let foodItems=[{name:'cheesy pizza',price: 14},
{name:'veggie pizza',price: 19},
{name:'hawaiin heaven',price:20 },
{name:'truffle mushroom',price:25 },
{name:'jalapeno burger',price: 10},
{name:'Bonanza burger',price: 12},
{name:'creme brule',price:25 },
{name:'pana cotta',price: 26},
{name:'berry cheesecake',price:23 },
];
  
let cartItems = [];
let total = 0;
  
function addToCart(foodName, price) {
    // Check if the food item is already in the cart
    const existingItem = cartItems.find(item => item.foodName === foodName);
if (existingItem) {
        // Increment the quantity if the item is already in the cart
        existingItem.quantity += 1;
    } else {
        // Add a new entry to the cart if the item is not in the cart
        cartItems.push({ foodName, price, quantity: 1 });
    }
  
total += price;
updateCart();
 }
  
  function updateCart() {
    // Trigger an event to inform the cart page to update its content
    const updateCartEvent = new CustomEvent('updateCart', { detail: { cartItems, total } });
    document.dispatchEvent(updateCartEvent);
  }
  
  function checkout() {
    console.log('Order:', cartItems);
    cartItems = [];
    total = 0;
    updateCart();
  }
  


/* like color change */
function changecolor(clickdiv){
    var el=clickdiv.querySelector('.like i');
    el.style.backgroundColor='rgb(198, 95, 95)';
}

/* faq section expand  */
let faqs = [...document.querySelectorAll('.faq')];
faqs.map(faq => {
       let ques = faq.querySelector('.question-box');
       ques.addEventListener('click', () => {
           faq.classList.toggle('active');
    })
});

