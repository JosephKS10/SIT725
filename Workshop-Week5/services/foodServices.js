const foodItems = [ { id: 1, name: 'Pizza' },
{ id: 2, name: 'Burger' },
{ id: 3, name: 'Sushi' },
{ id: 4, name: 'Pasta' },
{ id: 5, name: 'Salad' },
{ id: 6, name: 'Tacos' },
{ id: 7, name: 'Ice Cream' },
{ id: 8, name: 'Steak' },
{ id: 9, name: 'Fries' },
{ id: 10, name: 'Dumplings' } ];


const getAllFood = () => {
return foodItems;
};

module.exports = { getAllFood };