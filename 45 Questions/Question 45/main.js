// Function to store car information
function Car(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    // Add optional properties to the carInfo Object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var key = option[0], value = option[1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required and optional information
var carDetails = Car("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);
// Print the Object returned by the function
console.log(carDetails);
