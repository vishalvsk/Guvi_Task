// Sample data - replace this with your dynamic data
const cardData = {
  imageUrl: "https://via.placeholder.com/300", // Replace this with your image URL
  title: "Sample Title",
  description: "This is a sample description.",
};

// Function to set card data dynamically
function setCardData() {
  document.getElementById("cardImage").src = cardData.imageUrl;
  document.getElementById("cardTitle").innerText = cardData.title;
  document.getElementById("cardDescription").innerText = cardData.description;
}

// Call the function to set the card data
setCardData();
