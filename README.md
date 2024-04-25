# Games_Store
Certainly! Let's dive into a detailed description of this board games store website:

### HTML Structure:
The HTML document sets up the structure of the board games store website. It includes:

- **Header Section**: Contains the company name and a popup section.
- **Popup Section**: Initially hidden, it prompts users to enter their name and email.
- **Welcome Section**: Hidden initially, it displays a welcome message after successful form submission.
- **Product Display Section**: This area dynamically populates with board game products.
- **Cart Section**: Initially hidden, it shows items added to the cart.
- **Checkout Button**: Hidden initially, appears when items are added to the cart.

### CSS Styling (main.css):
The CSS file defines styles for various elements of the website, ensuring a clean and responsive layout. Notable styles include:

- Setting global styles like font family, background color, and margin/padding reset.
- Styling the company name with specific colors, padding, and margin.
- Configuring the popup to overlay the entire screen with a semi-transparent background.
- Defining grid-based layout for product display and styling individual product items.

### JavaScript Functions (main.js):
The JavaScript file contains functions that drive interactivity and behavior of the website:

- **openPopup()**: Displays the popup when called.
- **closePopup()**: Closes the popup when the close button is clicked.
- **customerId()**: Validates user input (name and email), hides the popup, displays a welcome message, and triggers product display.
- **checkEmail(email)**: Validates the format of the provided email address.
- **displayProducts()**: Dynamically generates HTML to display board game products with images, names, prices, and an "Add to Cart" button.
- **addToCart(index)**: Adds selected board games to the cart based on user input (quantity), storing details like product name, quantity, and total price.
- **checkout()**: Renders the cart items with their total prices, prompts the user with a thank-you message upon checkout, and clears the cart for the next transaction.

### Key Features:
- **Popup**: Prompts users to enter their details (name and email) before accessing the store.
- **Product Display**: Dynamically shows board game products with images and prices.
- **Cart Management**: Allows users to add items to a cart, specifying quantities.
- **Checkout Process**: Calculates total prices, displays cart items, and confirms the purchase with a thank-you message.

### Overall Functionality:
1. **User Interaction**: Users enter their details to access the store.
2. **Product Display**: Games are displayed with details and an option to add to cart.
3. **Cart Management**: Users can add games to their cart and specify quantities.
4. **Checkout**: Users can review their cart, confirm the purchase, and receive a confirmation message.

This project provides a complete user experience for browsing, selecting, and purchasing board games from the online store. The combination of HTML, CSS, and JavaScript creates an interactive and engaging platform for board game enthusiasts.
