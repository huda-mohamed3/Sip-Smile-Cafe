const sidebar=document.querySelector('.sidebar')
function showSidebar(){
    sidebar.style.display='flex'

} 
function hideSidebar(){
    sidebar.style.display='none'
}


    document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
    card.addEventListener('click', () => {
        
    // Reset all cards to white background and black text
    cards.forEach(c => {
        c.style.backgroundColor = 'white';
        c.style.color = 'black'
    
    });
    // Set the clicked card to black background and white text
    card.style.backgroundColor = '#32373c';
    card.style.color = 'white';


}); 
});   
});       

function setButtonValue(value) {
document.getElementById('buttonValue').value = value; //input
}
// ***************************************************************************************
function whatkind(value) {
    document.getElementById('whatKindValue').value = value; //input
    }

// ***************************************************************************************
function setEmailAddresses() {
    var emailTextarea = document.getElementById('emailTextarea').value;
    document.getElementById('emailAddresses').value = emailTextarea;
}


// ***************************************************************************************


function setCustomValue() {
const customAmount = document.getElementById('customAmount').value
document.getElementById('buttonValue').value = customAmount;
}

// ***********************************************
const offOn = document.querySelector("#offOn");
const onHide = document.querySelector('.onHide')
const sendboth = document.querySelector('.sendboth')
const yourPhone = document.querySelector('.yourPhone')

var sendbothClicked=false;

offOn.addEventListener('click', ()=>{
offOn.classList.add("fa-solid-fa-toggle-on")
offOn.classList.remove("fa-solid-fa-toggle-off")
onHide.style.display='none';
offOn.style.color ='#006aff';
yourPhone.style.display = 'block';
yourPhone.setAttribute('required', 'required');
sendbothClicked=true;

if(!offOn.classList.contains("fa-toggle-on")) {
onHide.style.display = 'block';
offOn.style.color ='#b2b2b2'

yourPhone.style.display = 'none';
yourPhone.removeAttribute( 'required');



}
})


sendboth.addEventListener('click',()=>{
    offOn.classList.toggle("fa-toggle-on")
        onHide.style.display='none';
        offOn.style.color ='#006aff'
        yourPhone.style.display = 'block';
yourPhone.setAttribute('required', 'required');

sendbothClicked=true;


        if(!offOn.classList.contains("fa-toggle-on")) {
            onHide.style.display = 'block';
        offOn.style.color ='#b2b2b2'
        yourPhone.style.display = 'none';
yourPhone.removeAttribute( 'required');


        }

        
})


// ***********************************************
var emailBtnClicked = false;
var phoneBtnClicked = false;

document.addEventListener('DOMContentLoaded', () => {

const phoneNum = document.querySelector(".phoneNum")
const email =  document.querySelector(".email")
const emailBtn = document.querySelector(".emailBtn")
const phoneBtn = document.querySelector(".phoneBtn")
const sendbtn = document.querySelector('.sendbtn')
const checkoutP = document.querySelector('.checkoutP')
const yourPhone = document.querySelector('.yourPhone')

// *************************************
const inputLabel = document.querySelector('.inputLabel');
const counterDateAll =document.querySelector('.counterDateAll');



// *************************************
emailBtn.style.backgroundColor = '#f2f2f2';
emailBtn.style.boxShadow ="none"


emailBtn.onclick = (event)=>{
    event.preventDefault();
    

    email.style.display = 'block';
    email.setAttribute('required', 'required');
    phoneNum.style.display = 'none';
    phoneNum.removeAttribute('required');

    emailBtn.style.backgroundColor = 'white';
    phoneBtn.style.backgroundColor = '#f2f2f2';
    phoneBtn.style.boxShadow ="none";
    checkoutP.style.display = "none";
    yourPhone.style.display = 'none';
yourPhone.removeAttribute( 'required');
    emailBtnClicked = true

// *************************************
    inputLabel.style.display ='none';
    counterDateAll.style.display = 'block';
    counterDateAll.innerHTML = `
    <div class="counterDate" tabindex="0" > 
        <div tabindex="0" class="counter">
                <button id="decrement" disabled>-</button>
                <div id="display" class="display">1</div>
                <button id="increment">+</button>
            </div>
        <div tabindex="0" class="dateBorder ">
            <input type="datetime-local"  id="appointment1" >
        </div> 
      </div>    
    `
document.getElementById('appointment1').setAttribute('min', currentDateTime );
document.getElementById('appointment1').setAttribute('required', 'required' );


    const display = document.getElementById('display');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    const updateButtons = () => {
        const currentValue = parseInt(display.textContent);
        decrementButton.disabled = currentValue <= 1;
    };

    incrementButton.addEventListener('click', (e) => {
        e.preventDefault()
        display.textContent = parseInt(display.textContent) + 1;
        updateButtons();
    });

    decrementButton.addEventListener('click', (e) => {
        e.preventDefault()
        const currentValue = parseInt(display.textContent);
        if (currentValue > 1) {
            display.textContent = currentValue - 1;
            updateButtons();
        }
    });
// *************************************
}


phoneBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    email.style.display = 'none';
    email.removeAttribute('required');

    phoneNum.style.display = 'block';
    phoneNum.setAttribute('required', 'required');

    phoneBtn.style.backgroundColor = 'white';
    emailBtn.style.backgroundColor = '#f2f2f2';
    emailBtn.style.boxShadow ="none";
    checkoutP.style.display = "block";

// *************************************
    inputLabel.style.display ='block';
    counterDateAll.style.display = 'none';

    phoneBtnClicked = true;



})
}); 


//************************************************************** ********** 
const cardCustom = document.querySelector('#cardCustom');
const input = document.querySelector('.input');

cardCustom.addEventListener('click' ,()=>{
input.innerHTML=`
  <input type="text" class="customInput" name=" custom-Amount" id="customAmount"  placeholder="$5 to $2,000" min="5" max="2000" required  
     oninvalid="this.setCustomValidity('Please enter an amount between $5 and $2,000')"
     oninput="this.setCustomValidity('')">

  <p class="customP">* The 3% discount applies to values $10 and above.</p>

` 

document.addEventListener('click', (event) => {
if (!cardCustom.contains(event.target) && !input.contains(event.target)) {
input.innerHTML = ''; // Remove the HTML when clicking outside
}
})
})


//***********************************************************************
const disCount = document.querySelector('#disCount');

disCount.addEventListener('click', () => {
disCount.innerHTML = `
<p>Discount Code</p>
<div class="divDiscout">
    <input type="text" class="Discount" placeholder="MYDISCOUNTCODE" >
    <button class="dicountBtn" type="button" disabled>Apply</button>
</div>
`;


const discountInput = document.querySelector('.Discount');
const applyButton = document.querySelector('.dicountBtn');

discountInput.focus();

discountInput.addEventListener('input', function() {
applyButton.disabled = discountInput.value.trim() === '';//disabled = true
applyButton.style.color = 'blue';

});


applyButton.addEventListener('mouseover', function() {
if (applyButton.disabled) {
    applyButton.style.cursor = 'not-allowed';
    applyButton.style.color = '#006aff45';
} else {
    applyButton.style.cursor = 'pointer';
    applyButton.style.color = '#006aff';
}
});

});

//***********************************************************************
 
const nextImg = document.querySelector('.nextImg') ;

function newImg(id){
    nextImg.src = id;

}

/////////////////////////////////

const bg = document.querySelector('.bg');
const images = ["imgs/gift6.jpg",'imgs/gift7.jpg','imgs/giftexa.jpg','imgs/gift2.jpg','imgs/gift9.jpg'  ];
const color = ["#d1bda9",'rgb(108 126 56)', "#ea286c" ,'#b07ddd','rgb(92 165 187'];
let currentIndex = 0;
let currentColor = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderImage = document.getElementById('sliderImage');



prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // 3
    sliderImage.src = images[currentIndex];
    currentColor = (currentColor - 1 + color.length) % color.length; // 3
    bg.style.backgroundColor=color[currentColor];
})

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; //1
    sliderImage.src = images[currentIndex];
    currentColor = (currentColor + 1) % color.length; // Added this line to update the color
     bg.style.backgroundColor = color[currentColor];
});


//////////////////////////////////////



function colors(color){
    bg.style.backgroundColor=color;
}

//****************************************
 const first = document.querySelector('#first');
 first.style.border = '2px solid #0381cf';
  
 const giftBoxs = document.querySelectorAll('.giftBox');

 giftBoxs.forEach((giftBox)=>{
    giftBox.addEventListener('click',()=>{
        //set
        giftBox.style.border = '2px solid #0381cf';
        //reset
        giftBoxs.forEach((gift)=>{
            if(gift != giftBox  ){ //skip the clicked card 
                gift.style.border = ' 1px solid #00000055';
            }
        })  
    }) 
 })

//****************************************
const giftTextMulti  = document.querySelector('.giftTextMulti');
const sendbtn = document.querySelector('.sendbtn');
const textareaEmail = document.querySelector('#textareaEmail')
const inputLabel = document.querySelector('.inputLabel');
const counterEmail = document.querySelector('.counterEmail');
const checkoutP = document.querySelector('.checkoutP');
const Invite = document.querySelector('.Invite')



first.addEventListener('click',()=>{
document.getElementById('appointment').setAttribute('required', 'required');
    sendboth.style.display = 'flex';
    sendbtn.style.display = 'block';
    onHide.style.display ='block';
    inputLabel.style.display = 'block';
    counterEmail.style.display = 'none' 
    textareaEmail.style.display = 'none'
    checkoutP.style.display = 'block';
   nameEmailMessage.style.display = 'none';
   Invite.style.display = 'none';

const counterDateAll =document.querySelector('.counterDateAll');
const whatKind = document.querySelector('#whatKind');
const phoneBtn = document.querySelector(".phoneBtn")
const emailBtn = document.querySelector(".emailBtn")


phoneBtn.style.backgroundColor = 'white';
emailBtn.style.backgroundColor = '#f2f2f2';
phoneNum.style.display = 'block';
email.style.display = 'none';
offOn.classList.add("fa-toggle-off")
offOn.classList.remove("fa-toggle-on")
offOn.style.color ='#b2b2b2'


})

   
giftTextMulti.addEventListener('click', ()=>{
    sendboth.style.display = 'none';
    sendbtn.style.display = 'none';
    onHide.style.display ='none';
    inputLabel.style.display = 'none';
    textareaEmail.style.display = 'block'
    counterEmail.style.display = 'block'
    nameEmailMessage.style.display = 'none';
   Invite.style.display = 'none' 
 
   checkoutP.style.display = 'none';
   const counterDateAll =document.querySelector('.counterDateAll');

   counterDateAll.style.display='none'
  
   document.getElementById('appointment').removeAttribute('required');


    textareaEmail.innerHTML = `
    <textarea  type="email" placeholder="Email addresses (separated by commas)" name='Email addresses' id='emailTextarea'></textarea>
    `
    counterEmail.innerHTML = `
    <div class="counterDate" id='counterDate' tabindex="0">
        <div tabindex="0" class="counter" id='counterEmail'>
                <button id="decrement" disabled>-</button>
                <div id="displayEmail" class="display" disabled>1</div>
                <button id="increment" disabled>+</button>
            </div>
        <div tabindex="0" class="dateBorder">
            <input type="datetime-local" id='appointment3' >
           
        </div> 
      </div>  
    
    `
document.getElementById('appointment3').setAttribute('min', currentDateTime);
document.getElementById('appointment3').setAttribute('required', 'required');

    
   

})

const giftTextGroup = document.querySelector('.giftTextGroup');
const email =  document.querySelector(".email");
const inputText = document.querySelector('.inputText');
const phoneNum = document.querySelector('.phoneNum');
const nameEmailMessage = document.querySelector('#nameEmailMessage')



giftTextGroup.addEventListener('click',()=>{
const counterDateAll =document.querySelector('.counterDateAll');

   email.style.display = 'block';
   email.setAttribute('required', 'required');
   inputText.style.display = 'block';
   inputText.setAttribute('required', 'required');

   phoneNum.style.display = 'none';
   phoneNum.removeAttribute('required');

   nameEmailMessage.style.display = 'block';
   sendboth.style.display = 'none';
   sendbtn.style.display = 'none';
   checkoutP.style.display = 'none';
   counterDateAll.style.display= 'none'
   textareaEmail.style.display = 'none'
   counterEmail.style.display = 'none'
   inputLabel.style.display = 'block';
   onHide.style.display ='block';
   Invite.style.display = 'block'

})



// Get the current date and time
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');


// Format the date and time as YYYY-MM-DDTHH:MM
const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

// Set the min attribute to the current date and time
document.getElementById('appointment').setAttribute('min', currentDateTime);
document.getElementById('appointment').setAttribute('required', 'required');


function filterEmptyFields() {
    const form = document.getElementById('checkout-form');
    const formData = new FormData(form);
    const filteredData = {};

    formData.forEach((value, key) => {
        if (value.trim() !== '') {
            filteredData[key] = value;
        }
    });

    return false; // Prevent actual form submission for demonstration
}










