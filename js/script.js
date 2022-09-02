const loadFoodData = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}
const displayFood = food => {
    const mealContainer = document.getElementById('food-container');
    mealContainer.innerHTML = ``;
    food.forEach(element => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // adding food dynamicaly
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${element.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.strMeal}</h5>
            <p class="card-text">${element.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv)
    })
}
const searchFood = () =>{
    const searchfield = document.getElementById('search-field');
    const searchInput = searchfield.value;
    loadFoodData(searchInput)
}
loadFoodData('')