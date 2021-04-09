const itemAdd = async (event) => {
  const dishId = event.target.value;

  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  const response = await fetch("/api//${dishId}");
  const dishInfo = await response.json();
  if (response.ok) {
    const postResponse = await fetch("/api/fridge/name", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });

    if (postResponse.ok) {
      alert("Dish Added");
    } else {
      alert("Failed to add dish");
    }
  } else {
    alert("Could not add dish");
  }
};

var addDishButton = document.getElementsByClassName("add-dish-button");
for (var i = 0; i < addDishButton.length; i++) {
  addDishButton[i].addEventListener("click", addDish);
}

// Gather the data from the form elements on the page
const item = document.querySelector("#item-add").value.trim();

if (item) {
  // Send the e-mail and password to the server
  const response = await fetch("/api/fridge/name", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add item");
  }
}

document.querySelector(".login-form").addEventListener("submit", itemAdd);
