document.addEventListener('DOMContentLoaded', () => {
    const fetchDrinksBtn = document.getElementById('fetch-drinks-btn');
    const drinksContainer = document.getElementById('drinks-container');

    fetchDrinksBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
            const data = await response.json();
            displayDrinks(data.drinks);
        } catch (error) {
            console.error('Error fetching drinks:', error);
        }
    });

    function displayDrinks(drinks) {
        drinksContainer.innerHTML = '';
        drinks.forEach(drink => {
            const drinkDiv = document.createElement('div');
            drinkDiv.classList.add('drink');

            const name = document.createElement('h2');
            name.textContent = drink.strDrink;
            drinkDiv.appendChild(name);

            const image = document.createElement('img');
            image.src = drink.strDrinkThumb;
            image.alt = drink.strDrink;
            drinkDiv.appendChild(image);

            const instructions = document.createElement('p');
            instructions.textContent = drink.strInstructions;
            drinkDiv.appendChild(instructions);

            drinksContainer.appendChild(drinkDiv);
        });
    }
});
