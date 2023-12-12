// Get table body
const rentalTable = document.querySelector('.tableBody')
const rentalUrl = 'https://mjstettler.github.io/wdd230/scoots/data/rental.json'

async function getData() {
    try {
        const response = await fetch(rentalUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayRentals(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error("Error parsing or fetching data", error)
    }

    const response = await fetch(rentalUrl);
    const data = await response.json();
    displayRentals(data);
}

function displayRentals(rentals) {
    rentals.rentals.forEach(rental => {
        const row = document.createElement('tr');


        name = rental.name
    });
}