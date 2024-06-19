// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let i=0;i<show_magicians.length;i++) {
        console.log(magicians);
    }
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];

    for (let i=0;i<make_great.length;i++) {
        greatMagicians.push(`the Great ${magicians}`);
    }

    return greatMagicians;
}

// Array of magician's names
let magicianName =["KUDA BUX", "BOSCO", "VON ARX ", "TAMPA"];

// Call make_great to modify the array
let greatMagicians = make_great(magicianName);

// Call show_magicians to see the modified list
show_magicians(greatMagicians);