// Function to show magicians
function show_magicians2(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
    let greatMagicians1: string[] = [];

    for (let magician of magicians) {
        greatMagicians1.push(`the Great ${magician}`);
    }

    return greatMagicians1;
}

// Array of magician's names
let magicianNames2 = ["KUDA BUX", "BOSCO", "VON ARX ", "TAMPA"];

// Create a copy of the array
let originalMagicians = [...magicianNames2];

// Call make_great with the copy
let greatMagicians1 = make_great(originalMagicians);

// Call show_magicians to display the original array
show_magicians2(magicianNames2);

// Call show_magicians to display the modified array
show_magicians2(greatMagicians1);