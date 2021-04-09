const itemAdd = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const item = document.querySelector('#item-add').value.trim();
  
    if (item) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/fridge', {
        method: 'POST',
        body: JSON.stringify({name:item }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(response)
        alert('Failed to add item');
      }
    }
  };
  
  
  document
    .querySelector('.add-item')
    .addEventListener('submit', itemAdd);
  