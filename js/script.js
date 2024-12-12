

function showPopupOnce() { 
    const popupOverlay = document.getElementById("popup-overlay");

    // Check if the popup has already been shown during this session
    if (!sessionStorage.getItem("popupShown")) {
        // Show the popup
        popupOverlay.style.display = "flex";

        // Close popup on 'Ok' button click
        const backToHomeButton = document.getElementById("backTohome");
        if (backToHomeButton) {
            backToHomeButton.addEventListener("click", () => {
                popupOverlay.style.display = "none";
                sessionStorage.setItem("popupShown", "true"); // Mark popup as shown
            });
        }

        // Close popup on 'X' button click
        const closeNoticeButton = document.getElementById("closeNotice");
        if (closeNoticeButton) {
            closeNoticeButton.addEventListener("click", () => {
                popupOverlay.style.display = "none";
                sessionStorage.setItem("popupShown", "true"); // Mark popup as shown
            });
        }
    } else {
        // Ensure the popup is hidden if it has already been shown
        popupOverlay.style.display = "none";
    }
}

// Call the function to show the popup only once
document.addEventListener("DOMContentLoaded", showPopupOnce);




// Select all sections, navbar links, and sidebar links
const sections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll(".links li a");
const sidebarLinks = document.querySelectorAll(".sidebar li a");
function updateActiveClass() {
    const viewportMid = window.scrollY + window.innerHeight / 2;
    let activeSection = null;

    // Determine the active section
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportMid >= sectionTop && viewportMid < sectionBottom) {
            activeSection = section.getAttribute("data-section");
        }
    });

    // Update navbar links
    navLinks.forEach(link => {
        const targetSection = link.getAttribute("href").substring(1); // Extract ID from href
        if (activeSection === targetSection) {
            link.parentElement.classList.add("active3");
        } else {
            link.parentElement.classList.remove("active3");
        }
    });
}

function syncActiveClass() {
    // Loop through all navbar links
    navLinks.forEach(navLink => {
        if (navLink.parentElement.classList.contains("active3")) {
            const href = navLink.getAttribute("href"); // Get the href of the active navbar link

            // Find the matching link in the sidebar
            sidebarLinks.forEach(sidebarLink => {
                if (sidebarLink.getAttribute("href") === href) {
                    sidebarLink.parentElement.classList.add("active3"); // Add active3 to the sidebar link
                } else {
                    sidebarLink.parentElement.classList.remove("active3"); // Remove active3 from others
                }
            });
        }
    });
}

// Attach scroll and load events
window.addEventListener("scroll", () => {
    updateActiveClass(); // Update navbar links
    syncActiveClass(); // Sync active3 with the sidebar
});

window.addEventListener("load", () => {
    updateActiveClass(); // Update navbar links
    syncActiveClass(); // Sync active3 with the sidebar
});


// *************************************************************************************************


// scroll btn
const scrollBtn = document.querySelector('#scrollBtn')
window.onscroll =function(){
    if(scrollY >= 100){
        scrollBtn.style.display = 'block';

    }
    else{
        scrollBtn.style.display = 'none';

    }
}
scrollBtn.onclick=function(){
   scroll({
    left:0,
    top:0,
    behavior:"smooth"

   })
}


const sidebar=document.querySelector('.sidebar');


function showSidebar(){
    sidebar.style.display='flex';
} 
function hideSidebar(){
    sidebar.style.display='none';

}




const lightMood = document.querySelectorAll('.lightMood');
const darkMood = document.querySelectorAll('.darkMood');
const setTheme = document.body;

function setInitialTheme() {
    let GetTheme = JSON.parse(localStorage.getItem('PageTheme')) || "light";
    
    if (GetTheme === "dark") {
        setTheme.classList.remove('lightStyle');
        toggleIcons(lightMood, darkMood, false, true);
    } else {
        setTheme.classList.add('lightStyle');
        toggleIcons(darkMood, lightMood, true, true);
    }
}

function allTheme() {
    const Theme = setTheme.classList.contains('lightStyle') ? "light" : "dark";
    localStorage.setItem('PageTheme', JSON.stringify(Theme));
}

function toggleIcons(activeSet, inactiveSet, isLightMode, skipThemeSave = false) {
    activeSet.forEach(activeItem => activeItem.style.display = "none");
    inactiveSet.forEach(inactiveItem => inactiveItem.style.display = "inline");

    if (isLightMode) {
        setTheme.classList.add('lightStyle');
    } else {
        setTheme.classList.remove('lightStyle');
    }

    if (!skipThemeSave) {
        allTheme();
    }
}

darkMood.forEach(item => {
    item.addEventListener('click', () => toggleIcons(darkMood, lightMood, true));
});

lightMood.forEach(item => {
    item.addEventListener('click', () => toggleIcons(lightMood, darkMood, false));
});

// Set the initial theme on page load
setInitialTheme();


// *******************searchQuery*****************

const searchInputMother = document.querySelector('.searchInput');
const clearIcon3 = document.querySelector('.closeSearchI');
const searchInput = document.querySelector('#searchInput');
const drinkBox = document.querySelector('.drinkBox');
const ourCoffeesToggle2 = document.querySelector('#ourCoffeesToggle');
const OurCoffeesSrollTo = document.querySelector('#OurCoffeesSrollTo');


OurCoffeesSrollTo.addEventListener('click',()=>{
    ourCoffeesToggle2.scrollIntoView({
        top: 685,
        behavior: 'smooth' // This makes the scroll smooth
    });
    
})



// Event listener for all search buttons with the 'searchButton' class
document.querySelectorAll('.searchButton').forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent the search button's click event from triggering the document click handler
        e.stopPropagation();
        searchInput.value = '';
        sidebar.style.display='none'
        // Display the searchInput container as flex
        searchInputMother.style.display = 'flex';
        drinkBox.style.marginTop = '60px';
        searchInput.focus();
        ourCoffeesToggle2.scrollIntoView({
            top: 685,
            behavior: 'smooth' // This makes the scroll smooth
        });
        
    

        document.addEventListener('click', (e) => {
            const openPopups = document.querySelectorAll('.openPopup');
            const popup = document.querySelectorAll('.popup');
        
            // Ensure the elements exist to avoid errors
            if (searchInputMother) {
                // Check if the click is outside searchInputMother
                const isClickOutsideSearch = !searchInputMother.contains(e.target);
        
                // Check if the click is outside all openPopup elements
                const isClickOutsidePopups = !Array.from(openPopups).some((popups) => popups.contains(e.target));
                const issidePopups = !Array.from(popup).some((popupe) => popupe.contains(e.target));
        
                // Reload the page if the click is outside both areas
                if (isClickOutsideSearch && isClickOutsidePopups && issidePopups) {
                    // window.location.reload();
                    const menuItems = document.querySelectorAll('.drinks');
                    menuItems.forEach(item => {
                        item.style.display='flex'
                    })
                    searchInputMother.style.display ='none'
        drinkBox.style.marginTop = '143px';


                }
            } else {
                console.error("searchInputMother element is not found in the DOM.");
            }
        });
    });
});



// Add an event listener to show/hide the clear icon based on input
searchInput.addEventListener('input', function () {
    if (searchInput.value !== "") {
        clearIcon3.style.display = 'flex'; 
        // Show the clear icon
        
    } else {
        clearIcon3.style.display = 'none'; // Hide the clear icon
    }
});

// Add the click event listener once to clearIcon3
clearIcon3.addEventListener('click', () => {
    if (searchInput.value === "") {
        searchInputMother.style.display = 'none'; // Hide the container if input is empty
        drinkBox.style.marginTop = '143px';
        // window.location.reload();
        const menuItems = document.querySelectorAll('.drinks');
        menuItems.forEach(item => {
            item.style.display='flex'
        })

    }  else {
        searchInput.value = ''; // Clear the input field
        drinkBox.style.marginTop = '60px';
        searchInputMother.style.display = 'flex'; // Hide the container if input is empty

    }
});

   


    searchInput.addEventListener('input', function() {
        
        const searchQuery = this.value.toLowerCase();
        const menuItems = document.querySelectorAll('.drinks');
    
        menuItems.forEach(item => {
            const itemNameElement = item.querySelector('h2');
            const itemName = itemNameElement.innerText.toLowerCase();
    
            if (itemName.includes(searchQuery)) {
                item.style.display = 'flex';
                itemNameElement.innerHTML = highlightQuery(itemNameElement.innerText, searchQuery);
            } else {
                const firstLetterMatch = itemName.charAt(0) === searchQuery.charAt(0);
                item.style.display = firstLetterMatch ? 'flex' : 'none';
                if (firstLetterMatch) {
                    itemNameElement.innerHTML = highlightQuery(itemNameElement.innerText, searchQuery.charAt(0));
                }
            }
        });
    });

    function highlightQuery(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

/* ************************************* order PopUp script***************************************************************************** */

document.addEventListener('DOMContentLoaded', () => {
    const orderPopup = document.getElementById('orderPopup');
    const cartPopup = document.getElementById('cartPopup');
    const checkoutPopup = document.getElementById('checkoutPopup');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const totalCartAmount = document.getElementById('totalCartAmount');
    let basePrice = 0;
    let cart = [];
    let popupStack = []; // Stack to manage popup navigation order
    
    // Show popup function
    function showPopup(popup, imgSrc = null, title = null, description = null, price = null) {
        // Push the popup to the stack if it's not already displayed
        if (popupStack[popupStack.length - 1] !== popup) {
            popupStack.push(popup);
        }
        
        if (popup === orderPopup && imgSrc && title && description && price) {
            // Populate orderPopup with drink details
            document.getElementById('popupImg').src = imgSrc;
            document.getElementById('popupTitle').innerText = title;
            document.getElementById('popupDescription').innerText = description;
            basePrice = parseFloat(price.replace('$', ''));
            document.getElementById('quantity').value = 1;
            updatePrice();
        }
        
        popup.style.display = 'flex';
    }

       // Close popup function
       function closePopup(popup) {
        popup.style.display = 'none';
    }

    document.getElementById('backToMenu').addEventListener('click', () => {
        closePopup(orderPopup);
    });

    document.getElementById('backToOrder').addEventListener('click', () => {
        closePopup(cartPopup);
        showPopup(orderPopup);
    });

    document.getElementById('backToCart').addEventListener('click', () => {
        closePopup(checkoutPopup);
        showPopup(cartPopup);
        ourPymantInfo.style.display = 'none';
  
        const radios = document.querySelectorAll('input[name="paymentMethod2"]');
        radios.forEach(radio => radio.checked = false); 
    });
// *********************************


    // Update price function
    function updatePrice() {
        const selectedSize = document.querySelector('.sizeBtn.selected');
        const quantity = parseInt(document.getElementById('quantity').value);
        const sizeIncrease = parseFloat(selectedSize.getAttribute('data-increase'));
        const totalPrice = (basePrice + sizeIncrease) * quantity;
        document.getElementById('popupPrice').innerText = `$${totalPrice.toFixed(2)}`;
    }

    function addToCart() {
        let title = document.getElementById('popupTitle').innerText;
        const size = document.querySelector('.sizeBtn.selected').innerText;
        const quantity = parseInt(document.getElementById('quantity').value);
        const price = parseFloat(document.getElementById('popupPrice').innerText.replace('$', ''));
        const imgSrc = document.getElementById('popupImg').src;
    
        const item = { title, size, quantity, price, imgSrc };
        cart.push(item);
        displayCartItems();
        closePopup(orderPopup);
        showPopup(cartPopup); // Automatically show cart after adding an item
    }
  

    // Display cart items
    function displayCartItems() {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        let totalAmount = 0;
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cartItem';
            itemDiv.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.title}">
                <div class="cartItemDetails">
                    <h4>${item.title} (${item.size})</h4>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${(item.price).toFixed(2)}</p>
                </div>
                <span class="removeItem" data-index="${index}">
                    <i class="fa-solid fa-trash-can" style="cursor: pointer;"></i>
                </span>
            `;
    
            cartItemsContainer.appendChild(itemDiv);
            totalAmount += item.price * item.quantity;
        });
    
        totalCartAmount.innerText = `Total: $${totalAmount.toFixed(2)}`;
        const trashIcons = cartItemsContainer.querySelectorAll('.removeItem i');
        trashIcons.forEach((icon, index) => {
            icon.addEventListener('click', () => removeItem(index));
        });
    }

    document.getElementById('closeCart').addEventListener('click', ()=>{
        window.location.reload();
  
 
     });
    
    
    // Example usage to open popup and format title
    document.querySelectorAll('.openPopup').forEach(button => {
        button.addEventListener('click', (event) => {
     
            const drinkItem = event.target.closest('.drinks');
            const imgSrc = drinkItem.querySelector('img').src;
            const title = drinkItem.querySelector('h2').innerText;
            const description = drinkItem.querySelector('p').innerText;
            const price = drinkItem.querySelector('h3').innerText;
            showPopup(orderPopup, imgSrc, title, description, price);
            
            
        });
    });
    
   
     
    // Remove item from cart
    function removeItem(index) {
        cart.splice(index, 1); // Remove item from the cart array
        displayCartItems(); // Refresh the cart display
    }

    // Event listeners for quantity adjustment
    document.getElementById('increaseQuantity').addEventListener('click', () => {
        let quantity = parseInt(document.getElementById('quantity').value);
        document.getElementById('quantity').value = quantity + 1;
        updatePrice();
    });

    document.getElementById('decreaseQuantity').addEventListener('click', () => {
        let quantity = parseInt(document.getElementById('quantity').value);
        if (quantity > 1) {
            document.getElementById('quantity').value = quantity - 1;
            updatePrice();
        }
    });

    // Event listeners for size selection
    document.querySelectorAll('.sizeBtn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.sizeBtn').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            updatePrice();
        });
    });

    // Event listener for adding to cart
    document.getElementById('addToCart').addEventListener('click', addToCart);

    // Event listeners for popup open buttons
    document.querySelectorAll('.openPopup').forEach(button => {
        button.addEventListener('click', (event) => {
            const drinkItem = event.target.closest('.drinks');
            const imgSrc = drinkItem.querySelector('img').src;
            const title = drinkItem.querySelector('h2').innerText;
            const description = drinkItem.querySelector('p').innerText;
            const price = drinkItem.querySelector('h3').innerText;
            showPopup(orderPopup, imgSrc, title, description, price);
        });
    });

    // Close popup on close button click
    document.querySelectorAll('.close').forEach(closeBtn => {
const ourPymantInfo = document.querySelector('.ourPymantInfo');

        closeBtn.addEventListener('click', () => {
            const currentPopup = popupStack.pop();
            closePopup(currentPopup);  
        ourPymantInfo.style.display = 'none';

        paymentmethods2.style.display = 'none'; 

            
        address.value="";
        Name.value="";
        tel.value="";
        postalCode.value="";
        city.value="";
        paymentSelecter.style.border ='none';
        const radios = document.querySelectorAll('input[name="paymentMethod2"]');
        radios.forEach(radio => radio.checked = false); 

        });
    });

    

    // Checkout button to open checkout popup
    document.getElementById('checkoutButton').addEventListener('click', () => { 
    const paymentmethods2=document.querySelector('.payment-methods2');

        paymentmethods2.style.display = 'none';
       const imptyCart =document.querySelector('#imptyCart');
       const cartMsg =document.querySelector('#cartMsg');
       const imptycartError =document.querySelector('#imptycartError');
       const ourPymantInfo = document.querySelector('.ourPymantInfo');

       ourPymantInfo.style.display = 'none';

        if (cart.length === 0) {
            imptyCart.style.display='flex';
            cartMsg.innerText='Your cart is empty!';
            imptycartError.innerText='Error';

        } else {
            displayCheckoutPopup();
            showPopup(checkoutPopup);
        }
    });

    // Display checkout popup items
    function displayCheckoutPopup() {
        const orderItemsList = document.getElementById('orderItemsList');
        orderItemsList.innerHTML = '';
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} (${item.size}) - $${item.price.toFixed(2)}`;
            orderItemsList.appendChild(listItem);
        });
        document.getElementById('issuingTime').textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        closePopup(cartPopup); // Close the cart popup
    }

 // Tab button event listeners
    document.getElementById('takeawayTab').addEventListener('click', () => {
    document.getElementById('takeawayTab').classList.add('active');
    document.getElementById('deliveryTab').classList.remove('active');
    document.getElementById('deliveryInfo').style.display = 'none'; // Hide delivery info
    document.getElementById('orderSummary').style.display = 'block'; // Show delivery info
    document.getElementById('PaymentMethodss').style.display = 'block'; // Show delivery info
    document.querySelector('.payment-methods').style.display = 'block'; // Hide delivery info

    paymentmethods2.style.display = 'none';
    const radios = document.querySelectorAll('input[name="paymentMethod2"]');
    radios.forEach(radio => radio.checked = false); 


    
});

document.getElementById('deliveryTab').addEventListener('click', () => {
    document.getElementById('deliveryTab').classList.add('active');
    document.getElementById('takeawayTab').classList.remove('active');
    document.getElementById('deliveryInfo').style.display = 'block'; // Show delivery info
    document.getElementById('orderSummary').style.display = 'none'; // Show delivery info
    document.querySelector('.payment-methods').style.display = 'none'; // Hide delivery info
    document.getElementById('PaymentMethodss').style.display = 'none'; // Show delivery info 
    const radios = document.querySelectorAll('input[name="paymentMethod2"]');
    radios.forEach(radio => radio.checked = false); 
    const ourPymantInfo = document.querySelector('.ourPymantInfo');
    const paymentmethods2=document.querySelector('.payment-methods2');

    ourPymantInfo.style.display = 'none';

    
    paymentmethods2.style.display = 'none';

    document.getElementById('backToOrderDelivery').addEventListener('click',()=>{
        DeliverypaymentConfirmationPopup.style.display= 'none';
        paymentmethods2.style.display = 'none';
    
    });
    document.getElementById('backToOrderDelivery2').addEventListener('click',()=>{
        DeliverypaymentConfirmationPopup.style.display= 'none';
        paymentmethods2.style.display = 'none';

    
    });
    
        
});




document.querySelector('#cartclose').addEventListener('click', () => {
        document.getElementById('imptyCart').style.display = 'none';
        document.getElementById('cartPopup').style.display = 'flex';
        
      

        });

    const ourCoffees = document.querySelector('.ourCoffees');

        document.getElementById('menucartpopup').addEventListener('click',()=>{
            ourCoffees.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('cartPopup').style.display = 'none';
        const menuItems = document.querySelectorAll('.drinks');
        menuItems.forEach(item => {
            item.style.display='flex'
        })

    
            

    });

    document.querySelector('#backToEmptyCart').addEventListener('click', () => {
        document.getElementById('imptyCart').style.display = 'none';
        document.getElementById('cartPopup').style.display = 'flex';
        
       

        });


    // Pay Now button
         //Delivery Information
         document.getElementById('payNowButton').addEventListener('click', () => {
    const DeliverypaymentMessage = document.getElementById('DeliverypaymentMessage');
    const DeliverypaymentMessage2 = document.getElementById('DeliverypaymentMessage2');
    const paymentPopup = document.getElementById('paymentConfirmationPopup');
    const DeliverypaymentConfirmationPopup = document.getElementById('DeliverypaymentConfirmationPopup');
    const ourPymantInfo = document.querySelector('.ourPymantInfo');
    
    ourPymantInfo.style.display = 'none';


    // Reset display settings for each click
    const loader = document.querySelector('.loader');
    const hideninfo = document.querySelector('.hideninfo');
    loader.style.display = 'block'; // Show loader initially
    hideninfo.style.display = 'none'; // Hide success info initially
    document.getElementById('success').style.display = 'none';

  if (document.getElementById('deliveryTab').classList.contains('active')) {
    const address = document.getElementById('address').value.trim();
    const Name = document.getElementById('Name').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const postalCode = document.getElementById('postalCode').value.trim();
    const city = document.getElementById('city').value.trim();

    // Check if any payment method is selected
    const paymentMethodSelected = document.querySelector('input[name="paymentMethod2"]:checked');
const paymentSelecter=document.querySelector('.paymentSelecter');

    paymentSelecter.style.border ='none'


    if (!address || !Name || !tel || !postalCode || !city) {
        // Show error if any delivery information is missing
        DeliverypaymentMessage.innerText = 'Error';
        DeliverypaymentMessage2.innerText = 'Please fill out all delivery information.';
        DeliverypaymentConfirmationPopup.style.display = 'flex';

      

        return;
    }

    if (!paymentMethodSelected) {
        // Show error if no payment method is selected
        DeliverypaymentMessage.innerText = 'Error';
        DeliverypaymentMessage2.innerText = 'Please select a payment method.';
        DeliverypaymentConfirmationPopup.style.display = 'flex';
        paymentSelecter.style.border ='1px solid red';
        return;
    }

}

    paymentPopup.style.display = 'flex';

    const address = document.getElementById('address');
        const Name = document.getElementById('Name');
        const tel = document.getElementById('tel');
        const postalCode = document.getElementById('postalCode');
        const city = document.getElementById('city');

    // Set a timeout to show success message after 5 seconds
    setTimeout(() => {
       
        loader.style.display = 'none'; // Hide loader
        hideninfo.style.display = 'block'; // Show success info

        document.getElementById('success').style.display = 'block';
        paymentMessage.innerText = 'Success!';
        paymentMessage2.innerHTML = 'Thank you for your order 😊';

        ourPymantInfo.style.display = 'none';

        // Close the checkout popup and reset the cart
        document.getElementById('checkoutPopup').style.display = 'none';
        cart = [];
        displayCartItems();

        address.value="";
        Name.value="";
        tel.value="";
        postalCode.value="";
        city.value="";
        paymentSelecter.style.border ='none';
        const radios = document.querySelectorAll('input[name="paymentMethod2"]');
        radios.forEach(radio => radio.checked = false); 
      
    },6000); // 5-second delay for loader before showing success

   
});



// *****************************************

// Close button functionality for payment confirmation popup
document.getElementById('closePaymentPopup').addEventListener('click', () => {
    document.getElementById('paymentConfirmationPopup').style.display = 'none';
});

document.getElementById('backToOrderDelivery3').addEventListener('click', () => {
    document.getElementById('paymentConfirmationPopup').style.display = 'none';
});
document.getElementById('backTohome').addEventListener('click', () => {
    document.getElementById('popup-overlay').style.display = 'none';
});

document.getElementById('closeNotice').addEventListener('click', () => {
    document.getElementById('popup-overlay').style.display = 'none';
});
  document.getElementById('closePaymentPopup').addEventListener('click', () => {
    document.getElementById('DeliverypaymentConfirmationPopup').style.display = 'none';
});


const allPyInfo = document.querySelector('.allPyInfo');
const ourPymantInfo = document.querySelector('.ourPymantInfo');

ourPymantInfo.style.display = 'none';

allPyInfo.addEventListener('click', () => {
    // Check the current display style and toggle it
    if (ourPymantInfo.style.display === 'none') {
        ourPymantInfo.style.display = 'flex';
    } else {
        ourPymantInfo.style.display = 'none';
    }
});


const paymentSelecter=document.querySelector('.paymentSelecter');
const paymentmethods2=document.querySelector('.payment-methods2');
paymentmethods2.style.display='none';
paymentSelecter.addEventListener('click',()=>{

    if (paymentmethods2.style.display === 'none') {
        paymentmethods2.style.display = 'block';
    } else {
        paymentmethods2.style.display = 'none';
    }

})


});
/* ************************************* order PopUp script***************************************************************************** */



