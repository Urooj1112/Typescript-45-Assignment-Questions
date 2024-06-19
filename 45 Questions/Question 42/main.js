// Function to show magicians
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var i = 0; i < show_magicians.length; i++) {
        console.log(magicians);
    }
}
// Function to make magicians great
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < make_great.length; i++) {
        greatMagicians.push("the Great ".concat(magicians));
    }
    return greatMagicians;
}
// Array of magician's names
var magicianName = ["KUDA BUX", "BOSCO", "VON ARX ", "TAMPA"];
// Call make_great to modify the array
var greatMagicians = make_great(magicianName);
// Call show_magicians to see the modified list
show_magicians(greatMagicians);
