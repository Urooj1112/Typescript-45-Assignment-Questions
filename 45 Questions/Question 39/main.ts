function city_country(City:string="Karachi",Country:string="Pakistan") {
    return `${City } , ${Country}`
}

//Function Call
city_country()
console.log(city_country());

city_country("Lahore")
console.log(city_country("Lahore"));

city_country("Hong Kong","China")
console.log(city_country("Hong Kong","China"));


