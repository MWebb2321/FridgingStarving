const itemAdd = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const item = document.querySelector('#item-add').value.trim();
  
    if (item) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/fridge/name', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add item');
      }
    }
  };
  
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', itemAdd);
  