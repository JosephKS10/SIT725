const foodService = require('../services/foodServices');

exports.getAllFood = (req, res) => {

    const items = foodService.getAllFood();
    res.json({ data: items });

};