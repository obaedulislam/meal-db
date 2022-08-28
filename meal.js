const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.textContent = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card shadow">
                <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `; 
        mealsContainer.appendChild(mealDiv);
    });
};
const searchFood = () => {
    console.log('search food');
    const searchField = document.getElementById('search-field');
    const searchFood = searchField.value;
    console.log(searchFood)
    loadMeals(searchFood);
    searchField.value = '';
}

const loadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
}
const displayMealDetail = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.textContent = '';
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card', 'shadow');
    detailDiv.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        </div>
    `;
    detailContainer.appendChild(detailDiv);
}
loadMeals('');