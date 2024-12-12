
// updateLink(); 
const url = ["welcame.html", "Gathering.html", "sip&smileGiftShop.html"];
let currentIndex = url.indexOf(window.location.pathname.split('/').pop());

if (currentIndex === -1) {
    currentIndex = 0; // Default to the first page if URL not found
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + url.length) % url.length;
    navigateToPage();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % url.length;
    navigateToPage();
});

function navigateToPage() {
    if (currentIndex < 0) {
        currentIndex = url.length - 1; // Wrap to last page if currentIndex is negative
    } else if (currentIndex >= url.length) {
        currentIndex = 0; // Wrap to first page if currentIndex exceeds array length
    }
    window.location.href = url[currentIndex];
}







