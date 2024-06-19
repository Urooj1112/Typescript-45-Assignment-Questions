function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.");
    }
    else {
        console.log("You ordered sandwich with: ".concat(items.join(', ')));
    }
    console.log("---------------------");
}
// Call the function with different numbers of arguments
make_sandwich("Chicken", "Cheese", "Lettuce");
make_sandwich("Onion", "Tomato", "Kebab");
make_sandwich();
