function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//with default Message
describe_city("Karachi");
//With different Message
describe_city("Hong Kong", "China");
//with different Message
describe_city("Santa Maria", "Brazil");
