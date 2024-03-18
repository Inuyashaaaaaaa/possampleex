// Select the button(s)
const addFoodButtons = document.querySelectorAll('button[name="addFood"]');

// Add an event listener to each button
addFoodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    addFoodItem();
  });
});

// Define the function that creates and appends the HTML elements
function addFoodItem() {
  const template = `
   
    <select name="food" id="food">
      <option value="burger">Burger</option>
      <option value="kikiam">Kikiam</option>
    </select>
    <br><br>
    <label for="quantity">Quantity</label><br>
    <input type="number" id="quantity" name="quantity"><br>
  `;

  // Create a new div to hold the new food item
  const newFoodItem = document.createElement('div');
  newFoodItem.classList.add('food-item');
  newFoodItem.innerHTML = template;

  // Find the container where the new food item will be appended
  const foodItemsContainer = document.querySelector('#food-items-container');

  // Append the new food item to the container
  foodItemsContainer.appendChild(newFoodItem);
}