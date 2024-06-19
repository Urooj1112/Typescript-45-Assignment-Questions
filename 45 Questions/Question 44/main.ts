function make_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.");
    } else {
        console.log(`You ordered sandwich with: ${items.join(', ')}`);
    }
    console.log("---------------------");
}

// Call the function with different numbers of arguments
make_sandwich("Chicken" , "Cheese" , "Lettuce");
make_sandwich("Onion", "Tomato" , "Kebab");
make_sandwich();
