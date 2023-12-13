// Get table body
const rentalTable = document.querySelector('.tableBody')
const rentalUrl = 'https://mjstettler.github.io/wdd230/scoots/data/rentals.json'



async function getData() {
    try {
        const response = await fetch(rentalUrl);
        if (response.ok) {
            const data = await response.json();

            console.log(data.rentals);

            displayRentals(data.rentals);
            
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error("Error parsing or fetching data", error)
    }
}

function displayRentals(rentals) {
    rentals.forEach(rental => {
        const row = document.createElement('tr');

        const name = document.createElement('td');
        const capacity = document.createElement('td');
        const rHalf = document.createElement('td');
        const rFull = document.createElement('td');
        const wHalf = document.createElement('td');
        const wFull = document.createElement('td');
        
        name.textContent = rental.name;
        capacity.textContent = rental.capacity;
        wHalf.textContent = rental.price[0].walkin[0].half;
        wFull.textContent= rental.price[0].walkin[0].whole;
        rHalf.textContent = rental.price[1].reservation[0].half
        rFull.textContent = rental.price[1].reservation[0].whole

        row.append(name,capacity,rHalf,rFull,wHalf,wFull)
        rentalTable.appendChild(row)
        console.log(rFull)
    });
}





getData();