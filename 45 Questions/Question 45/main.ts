// Function to store car information
function Car(manufacturer: string, modelName: string, ...options: any): object {
    let carInfo: object = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    // Add optional properties to the carInfo Object
    for (let option of options) {
        const [key, value] = option;
        carInfo[key] = value;
    }

    return carInfo;
}

// Call the function with required and optional information
let carDetails = Car("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["sunroof", true]);

// Print the Object returned by the function
console.log(carDetails);