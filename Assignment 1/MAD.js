// Shopping Cart Feature

// Initialize an empty cart
let cart = [];

/**
 * Add item to the cart
 * @param {object} product - product object with productId, productName, quantity, and price
 */
const addItemToCart = (product) => {
  // Add product to the cart using push method
  cart.push(product);
  console.log(`Added ${product.productName} to the cart`);
};

/**
 * Remove item from the cart by product ID
 * @param {number} productId - ID of the product to remove
 */
const removeItemFromCart = (productId) => {
  // Find the index of the product in the cart
  const index = cart.findIndex((product) => product.productId === productId);
  if (index !== -1) {
    // Remove the product from the cart using splice method
    cart.splice(index, 1);
    console.log(`Removed product with ID ${productId} from the cart`);
  } else {
    console.log(`Product with ID ${productId} not found in the cart`);
  }
};

/**
 * Update quantity of an item in the cart
 * @param {number} productId - ID of the product to update
 * @param {number} newQuantity - new quantity of the product
 */
const updateItemQuantity = (productId, newQuantity) => {
  // Find the product in the cart using find method
  const product = cart.find((product) => product.productId === productId);
  if (product) {
    // Update the quantity of the product
    product.quantity = newQuantity;
    console.log(`Updated quantity of product with ID ${productId} to ${newQuantity}`);
  } else {
    console.log(`Product with ID ${productId} not found in the cart`);
  }
};

/**
 * Calculate total cost of the items in the cart
 * @returns {number} total cost of the items in the cart
 */
const calculateTotalCost = () => {
  // Use reduce method to calculate the total cost
  return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
};

/**
 * Display cart summary
 * @returns {array} array of product summaries
 */
const displayCartSummary = () => {
  // Filter out items with zero quantity
  const filteredCart = cart.filter((product) => product.quantity > 0);
  // Use map method to generate product summaries
  return filteredCart.map((product) => ({
    productName: product.productName,
    quantity: product.quantity,
    totalProductPrice: product.price * product.quantity,
  }));
};

// Bonus feature: apply discount code to the total price
const applyDiscountCode = (discountCode) => {
  // Assume a 15% discount for the "WINTER15" code
  if (discountCode === "WINTER15") {
    const totalCost = calculateTotalCost();
    return totalCost * 0.85;
  } else {
    return calculateTotalCost();
  }
};

// Example usage:
addItemToCart({ productId: 4, productName: "Samsung TV", quantity: 1, price: 999.99 });
addItemToCart({ productId: 5, productName: "PlayStation 5", quantity: 2, price: 499.99 });
addItemToCart({ productId: 6, productName: "Xbox Controller", quantity: 0, price: 69.99 });

console.log("Cart Summary:");
console.log(displayCartSummary());

removeItemFromCart(5);

console.log("Cart Summary after removal:");
console.log(displayCartSummary());

updateItemQuantity(4, 3);

console.log("Cart Summary after update:");
console.log(displayCartSummary());

console.log(`Total Cost: ${calculateTotalCost()}`);

console.log(`Total Cost with discount: ${applyDiscountCode("WINTER15")}`);