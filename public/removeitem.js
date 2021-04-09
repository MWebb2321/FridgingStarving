const itemRemove = async (event) => {

    const ID = event.target.dataset.id
    const response = await fetch(`/api/fridge/${ID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response)
        alert('Failed to remove from fridge');
    }
};

const foodButtons = document.querySelectorAll(".foodRemove")

foodButtons.forEach((button) => {
    button.addEventListener("click", itemRemove)
})