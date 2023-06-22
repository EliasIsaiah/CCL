
let meals = [{ "meal_name": "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis", "meal_type": "lunch", "cuisine": "Italian", "ingredients": "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum", "calories": 1030, "price": 13.43, "date_prepared": "12/30/2021", "time_prepared": 116, "spiciness_level": "hot", "allergens": "gluten" },
{ "meal_name": "dapibus duis at velit eu est congue elementum in hac habitasse platea", "meal_type": "dinner", "cuisine": "Chinese", "ingredients": "blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt", "calories": 116, "price": 30.62, "date_prepared": "8/31/2021", "time_prepared": 96, "spiciness_level": "hot", "allergens": "dairy" },
{ "meal_name": "lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus", "meal_type": "dinner", "cuisine": "Mexican", "ingredients": "bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce", "calories": 1763, "price": 42.39, "date_prepared": "5/22/2021", "time_prepared": 73, "spiciness_level": "medium", "allergens": "gluten" },
{ "meal_name": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla", "meal_type": "snack", "cuisine": "Indian", "ingredients": "curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis", "calories": 1806, "price": 16.48, "date_prepared": "3/2/2021", "time_prepared": 119, "spiciness_level": "hot", "allergens": "dairy" }]

/* meal_name
*  meal_type
*  cuisine
*  ingredients
*  calories
*  price
*  date_prepared
*  time_prepared
*  spiciness_level
*  allergens
*/


meals.forEach(meal => {
    console.log(`this is the price of my meal: ${meal.price}`);
})

/**
 * @param {object} meal - The meal we want to calculate the taxed price of
 * 
 */

 SALES_TAX = .03; // +3% sales tax

function applySalesTax(price, tax) {
    price + (price * tax);
}
// write a function that takes in a meal and computes the price + sales tax


let people = [{ "id": 1, "first_name": "Rosita", "last_name": "Claeskens", "email": "rclaeskens0@typepad.com", "gender": "Female", "ip_address": "87.244.108.4" },
{ "id": 2, "first_name": "Elroy", "last_name": "Spears", "email": "espears1@wikimedia.org", "gender": "Male", "ip_address": "119.251.140.43" },
{ "id": 3, "first_name": "Erminie", "last_name": "Dran", "email": "edran2@xrea.com", "gender": "Female", "ip_address": "39.161.98.157" },
{ "id": 4, "first_name": "Dasie", "last_name": "Flinn", "email": "dflinn3@clickbank.net", "gender": "Female", "ip_address": "85.151.17.65" },
{ "id": 5, "first_name": "Hettie", "last_name": "Hainning", "email": "hhainning4@qq.com", "gender": "Female", "ip_address": "193.77.212.101" },
{ "id": 6, "first_name": "Mauricio", "last_name": "Jarritt", "email": "mjarritt5@nsw.gov.au", "gender": "Male", "ip_address": "42.38.236.124" },
{ "id": 7, "first_name": "Inge", "last_name": "Rosenwald", "email": "irosenwald6@abc.net.au", "gender": "Female", "ip_address": "176.210.177.71" },
{ "id": 8, "first_name": "Karin", "last_name": "Petre", "email": "kpetre7@irs.gov", "gender": "Female", "ip_address": "153.55.122.247" }]

