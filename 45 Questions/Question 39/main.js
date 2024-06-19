function city_country(City, Country) {
    if (City === void 0) { City = "Karachi"; }
    if (Country === void 0) { Country = "Pakistan"; }
    return "".concat(City, " , ").concat(Country);
}
//Function Call
city_country();
console.log(city_country());
city_country("Lahore");
console.log(city_country("Lahore"));
city_country("Hong Kong", "China");
console.log(city_country("Hong Kong", "China"));
